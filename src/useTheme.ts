import { useEffect, useState } from 'react';
export type Theme = 'system' | 'light' | 'dark';
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => { try { const value = localStorage.getItem('portfolio-theme'); return value === 'light' || value === 'dark' ? value : 'system'; } catch { return 'system'; } });
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => { const dark = theme === 'dark' || (theme === 'system' && media.matches); document.documentElement.dataset.theme = dark ? 'dark' : 'light'; document.documentElement.style.colorScheme = dark ? 'dark' : 'light'; document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#171717' : '#fafafa'); };
    apply(); media.addEventListener('change', apply);
    try { if (theme === 'system') localStorage.removeItem('portfolio-theme'); else localStorage.setItem('portfolio-theme', theme); } catch { /* Theme still works when storage is disabled. */ }
    return () => media.removeEventListener('change', apply);
  }, [theme]);
  const cycle = () => setTheme(value => value === 'system' ? 'light' : value === 'light' ? 'dark' : 'system');
  return { theme, cycle };
}
