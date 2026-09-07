import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

const TURNSTILE_SCRIPT_URL = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
// Default Cloudflare Turnstile test sitekey (always passes) used if VITE_TURNSTILE_SITE_KEY is not defined in .env
const DEFAULT_TEST_SITE_KEY = '1x00000000000000000000AA';

let scriptLoadingPromise = null;

const loadTurnstileScript = () => {
  if (window.turnstile) {
    return Promise.resolve(window.turnstile);
  }
  if (!scriptLoadingPromise) {
    scriptLoadingPromise = new Promise((resolve, reject) => {
      const existingScript = document.querySelector(`script[src*="turnstile/v0/api.js"]`);
      if (existingScript) {
        const checkInterval = setInterval(() => {
          if (window.turnstile) {
            clearInterval(checkInterval);
            resolve(window.turnstile);
          }
        }, 100);
        return;
      }

      const script = document.createElement('script');
      script.src = TURNSTILE_SCRIPT_URL;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.turnstile) {
          resolve(window.turnstile);
        } else {
          reject(new Error('Cloudflare Turnstile script loaded but window.turnstile is undefined'));
        }
      };
      script.onerror = (err) => reject(err);
      document.head.appendChild(script);
    });
  }
  return scriptLoadingPromise;
};

/**
 * Reusable Cloudflare Turnstile CAPTCHA Component
 * Compatible with React 19 and Vite single page application navigation
 */
const TurnstileWidget = forwardRef(({ onVerify, onExpire, onError, theme = 'auto' }, ref) => {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || DEFAULT_TEST_SITE_KEY;

  const reset = () => {
    if (widgetIdRef.current !== null && window.turnstile) {
      try {
        window.turnstile.reset(widgetIdRef.current);
      } catch (err) {
        console.warn('[Turnstile Widget] Failed to reset widget:', err);
      }
    }
  };

  useImperativeHandle(ref, () => ({
    reset
  }));

  useEffect(() => {
    let isMounted = true;

    loadTurnstileScript()
      .then((turnstile) => {
        if (!isMounted || !containerRef.current) return;

        // Clear previous widget instance if re-rendering
        if (widgetIdRef.current !== null) {
          try {
            turnstile.remove(widgetIdRef.current);
          } catch (e) {}
          widgetIdRef.current = null;
        }

        widgetIdRef.current = turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: theme,
          callback: (token) => {
            if (isMounted && onVerify) onVerify(token);
          },
          'expired-callback': () => {
            if (isMounted && onExpire) onExpire();
          },
          'error-callback': (err) => {
            if (isMounted && onError) onError(err);
          }
        });
      })
      .catch((err) => {
        console.error('[Turnstile Widget Error]', err);
        if (isMounted && onError) onError(err);
      });

    return () => {
      isMounted = false;
      if (widgetIdRef.current !== null && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (e) {}
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, theme]);

  return (
    <div className="turnstile-wrapper" style={{ margin: '1.25rem 0', minHeight: '65px', display: 'flex', justifyContent: 'flex-start' }}>
      <div ref={containerRef}></div>
    </div>
  );
});

TurnstileWidget.displayName = 'TurnstileWidget';

export default TurnstileWidget;
