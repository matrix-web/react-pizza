import { css } from 'styled-components';

export const colorsStyles = css`
  :root {
    /* Black alpha + black */
    --color-black-alpha-50: rgba(18, 18, 18, 0.05);
    --color-black-alpha-100: rgba(18, 18, 18, 0.1);
    --color-black-alpha-200: rgba(18, 18, 18, 0.2);
    --color-black-alpha-300: rgba(18, 18, 18, 0.3);
    --color-black-alpha-400: rgba(18, 18, 18, 0.4);
    --color-black-alpha-500: rgba(18, 18, 18, 0.5);
    --color-black-alpha-600: rgba(18, 18, 18, 0.6);
    --color-black-alpha-700: rgba(18, 18, 18, 0.7);
    --color-black-alpha-800: rgba(19, 19, 19, 0.8);
    --color-black-alpha-900: rgba(18, 18, 18, 0.9);
    --color-black: #131313;

    /*  White Alpha + white */
    --color-white-alpha-50: rgba(255, 255, 255, 0.05);
    --color-white-alpha-100: rgba(255, 255, 255, 0.1);
    --color-white-alpha-200: rgba(255, 255, 255, 0.2);
    --color-white-alpha-300: rgba(255, 255, 255, 0.3);
    --color-white-alpha-400: rgba(255, 255, 255, 0.4);
    --color-white-alpha-500: rgba(255, 255, 255, 0.5);
    --color-white-alpha-600: rgba(255, 255, 255, 0.6);
    --color-white-alpha-700: rgba(255, 255, 255, 0.7);
    --color-white-alpha-800: rgba(255, 255, 255, 0.8);
    --color-white-alpha-900: rgba(255, 255, 255, 0.9);
    --color-white: #fff;

    /*  Primary */
    --color-primary-50: #ebe9fb;
    --color-primary-100: #d7d3f6;
    --color-primary-200: #aea6ee;
    --color-primary-300: #867ae5;
    --color-primary-400: #5e4ddc;
    --color-primary-500: #3b28cc;
    --color-primary-600: #2f20a3;
    --color-primary-700: #23187a;
    --color-primary-800: #181052;
    --color-primary-900: #0c0829;

    /* Secondary */
    --color-secondary-50: #e9f0ff;
    --color-secondary-100: #d4e1ff;
    --color-secondary-200: #a8c2ff;
    --color-secondary-300: #7da4ff;
    --color-secondary-400: #5185ff;
    --color-secondary-500: #2667ff;
    --color-secondary-600: #0046ea;
    --color-secondary-700: #0035b0;
    --color-secondary-800: #002375;
    --color-secondary-900: #00123b;

    /* Tertiary */
    --color-tertiary-50: #e9f4fd;
    --color-tertiary-100: #d3eafa;
    --color-tertiary-200: #a8d5f5;
    --color-tertiary-300: #7cbff1;
    --color-tertiary-400: #51aaec;
    --color-tertiary-500: #2595e7;
    --color-tertiary-600: #1578c1;
    --color-tertiary-700: #105a91;
    --color-tertiary-800: #0b3c61;
    --color-tertiary-900: #051e30;

    /* Success */
    --color-success-50: #f0fdf4;
    --color-success-100: #dcfce7;
    --color-success-200: #bbf7d0;
    --color-success-300: #86efac;
    --color-success-400: #4ade80;
    --color-success-500: #22c55e;
    --color-success-600: #16a34a;
    --color-success-700: #15803d;
    --color-success-800: #166534;
    --color-success-900: #14532d;

    /* Warning */
    --color-warning-50: #fefce8;
    --color-warning-100: #fef9c3;
    --color-warning-200: #fef08a;
    --color-warning-300: #fde047;
    --color-warning-400: #facc15;
    --color-warning-500: #eab308;
    --color-warning-600: #ca8a04;
    --color-warning-700: #a16207;
    --color-warning-800: #854d0e;
    --color-warning-900: #713f12;

    /* Error */
    --color-error-50: #fef2f2;
    --color-error-100: #fee2e2;
    --color-error-200: #fecaca;
    --color-error-300: #fca5a5;
    --color-error-400: #f87171;
    --color-error-500: #ef4444;
    --color-error-600: #dc2626;
    --color-error-700: #b91c1c;
    --color-error-800: #991b1b;
    --color-error-900: #7f1d1d;

    /* info */
    --color-info-50: #f3f5fe;
    --color-info-100: #e6ebfd;
    --color-info-200: #c9d6fb;
    --color-info-300: #a8befa;
    --color-info-400: #7ea3f8;
    --color-info-500: #3b82f6;
    --color-info-600: #3574dc;
    --color-info-700: #2e65bf;
    --color-info-800: #25529c;
    --color-info-900: #1a3a6e;

    /* Slate */
    --color-slate-50: #f8fafc;
    --color-slate-100: #f1f5f9;
    --color-slate-200: #e2e8f0;
    --color-slate-300: #cbd5e1;
    --color-slate-400: #94a3b8;
    --color-slate-500: #64748b;
    --color-slate-600: #475569;
    --color-slate-700: #334155;
    --color-slate-800: #1e293b;
    --color-slate-900: #0f172a;

    /* gray */
    --color-gray-50: #f9fafb;
    --color-gray-100: #f3f4f6;
    --color-gray-200: #e5e7eb;
    --color-gray-300: #d1d5db;
    --color-gray-400: #9ca3af;
    --color-gray-500: #6b7280;
    --color-gray-600: #4b5563;
    --color-gray-700: #374151;
    --color-gray-800: #1f2937;
    --color-gray-900: #111827;

    /* zinc */
    --color-zinc-50: #fafafa;
    --color-zinc-100: #f4f4f5;
    --color-zinz-200: #e4e4e7;
    --color-zinc-300: #d4d4d8;
    --color-zinc-400: #a1a1aa;
    --color-zinc-500: #71717a;
    --color-zinc-600: #52525b;
    --color-zinc-700: #3f3f46;
    --color-zinc-800: #27272a;
    --color-zinc-900: #18181b;

    /* Neutral */
    --color-neutral-50: #fafafa;
    --color-neutral-100: #f5f5f5;
    --color-neutral-200: #e5e5e5;
    --color-neutral-300: #d4d4d4;
    --color-neutral-400: #a3a3a3;
    --color-neutral-500: #737373;
    --color-neutral-600: #525252;
    --color-neutral-700: #404040;
    --color-neutral-800: #262626;
    --color-neutral-900: #171717;

    /* stone */
    --color-stone-50: #fafaf9;
    --color-stone-100: #f5f5f4;
    --color-stone-200: #e7e5e4;
    --color-stone-300: #d6d3d1;
    --color-stone-400: #a8a29e;
    --color-stone-500: #78716c;
    --color-stone-600: #57534e;
    --color-stone-700: #44403c;
    --color-stone-800: #292524;
    --color-stone-900: #1c1917;

    /* Red */
    --color-red-50: #fef2f2;
    --color-red-100: #fee2e2;
    --color-red-200: #fecaca;
    --color-red-300: #fca5a5;
    --color-red-400: #f87171;
    --color-red-500: #ef4444;
    --color-red-600: #dc2626;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;
    --color-red-900: #7f1d1d;

    /* Orange */
    --color-orange-50: #fff7ed;
    --color-orange-100: #ffedd5;
    --color-orange-200: #fed7aa;
    --color-orange-300: #fdba74;
    --color-orange-400: #fb923c;
    --color-orange-500: #f97316;
    --color-orange-600: #ea580c;
    --color-orange-700: #c2410c;
    --color-orange-800: #9a3412;
    --color-orange-900: #7c2d12;

    /* Amber */
    --color-amber-50: #fffbeb;
    --color-amber-100: #fef3c7;
    --color-amber-200: #fde68a;
    --color-amber-300: #fcd34d;
    --color-amber-400: #fbbf24;
    --color-amber-500: #f59e0b;
    --color-amber-600: #d97706;
    --color-amber-700: #b45309;
    --color-amber-800: #92400e;
    --color-amber-900: #78350f;

    /* Yellow */
    --color-yellow-50: #fefce8;
    --color-yellow-100: #fef9c3;
    --color-yellow-200: #fef08a;
    --color-yellow-300: #fde047;
    --color-yellow-400: #facc15;
    --color-yellow-500: #eab308;
    --color-yellow-600: #ca8a04;
    --color-yellow-700: #a16207;
    --color-yellow-800: #854d0e;
    --color-yellow-900: #713f12;

    /* Lime */
    --color-lime-50: #f7fee7;
    --color-lime-100: #ecfccb;
    --color-lime-200: #d9f99d;
    --color-lime-300: #bef264;
    --color-lime-400: #a3e635;
    --color-lime-500: #84cc16;
    --color-lime-600: #65a30d;
    --color-lime-700: #4d7c0f;
    --color-lime-800: #3f6212;
    --color-lime-900: #365314;

    /* Green */
    --color-green-50: #f0fdf4;
    --color-green-100: #dcfce7;
    --color-green-200: #bbf7d0;
    --color-green-300: #86efac;
    --color-green-400: #4ade80;
    --color-green-500: #22c55e;
    --color-green-600: #16a34a;
    --color-green-700: #15803d;
    --color-green-800: #166534;
    --color-green-900: #14532d;

    /* Emerald */
    --color-emerald-50: #ecfdf5;
    --color-emerald-100: #d1fae5;
    --color-emerald-200: #a7f3d0;
    --color-emerald-300: #6ee7b7;
    --color-emerald-400: #34d399;
    --color-emerald-500: #10b981;
    --color-emerald-600: #059669;
    --color-emerald-700: #047857;
    --color-emerald-800: #065f46;
    --color-emerald-900: #064e3b;

    /*  cyan */
    --color-cyan-50: #ecfeff;
    --color-cyan-100: #cffafe;
    --color-cyan-200: #a5f3fc;
    --color-cyan-300: #67e8f9;
    --color-cyan-400: #22d3ee;
    --color-cyan-500: #06b6d4;
    --color-cyan-600: #0891b2;
    --color-cyan-700: #0e7490;
    --color-cyan-800: #155e75;
    --color-cyan-900: #164e63;

    /* Sky */
    --color-sky-50: #eff6ff;
    --color-sky-100: #dbeafe;
    --color-sky-200: #bfdbfe;
    --color-sky-300: #93c5fd;
    --color-sky-400: #60a5fa;
    --color-sky-500: #3b82f6;
    --color-sky-600: #2563eb;
    --color-sky-700: #1d4ed8;
    --color-sky-800: #1e40af;
    --color-sky-900: #1e3a8a;

    /* Blue */
    --color-blue-50: #eff6ff;
    --color-blue-100: #dbeafe;
    --color-blue-200: #bfdbfe;
    --color-blue-300: #93c5fd;
    --color-blue-400: #60a5fa;
    --color-blue-500: #3b82f6;
    --color-blue-600: #2563eb;
    --color-blue-700: #1d4ed8;
    --color-blue-800: #1e40af;
    --color-blue-900: #1e3a8a;

    /* indigo */
    --color-indigo-50: #eef2ff;
    --color-indigo-100: #e0e7ff;
    --color-indigo-200: #c7d2fe;
    --color-indigo-300: #a5b4fc;
    --color-indigo-400: #818cf8;
    --color-indigo-500: #6366f1;
    --color-indigo-600: #4f46e5;
    --color-indigo-700: #4338ca;
    --color-indigo-800: #3730a3;
    --color-indigo-900: #312e81;

    /* Violet */
    --color-violet-50: #f5f3ff;
    --color-violet-100: #ede9fe;
    --color-violet-200: #ddd6fe;
    --color-violet-300: #c4b5fd;
    --color-violet-400: #a78bfa;
    --color-violet-500: #8b5cf6;
    --color-violet-600: #7c3aed;
    --color-violet-700: #6d28d9;
    --color-violet-800: #5b21b6;
    --color-violet-900: #4c1d95;

    /* Purple */
    --color-purple-50: #faf5ff;
    --color-purple-100: #f3e8ff;
    --color-purple-200: #e9d5ff;
    --color-purple-300: #d8b4fe;
    --color-purple-400: #c084fc;
    --color-purple-500: #a855f7;
    --color-purple-600: #9333ea;
    --color-purple-700: #7e22ce;
    --color-purple-800: #6b21a8;
    --color-purple-900: #581c87;

    /* Fuchsia */
    --color-fuchsia-50: #fdf4ff;
    --color-fuchsia-100: #fae8ff;
    --color-fuchsia-200: #f5d0fe;
    --color-fuchsia-300: #f0abfc;
    --color-fuchsia-400: #e879f9;
    --color-fuchsia-500: #d946ef;
    --color-fuchsia-600: #c026d3;
    --color-fuchsia-700: #a21caf;
    --color-fuchsia-800: #86198f;
    --color-fuchsia-900: #701a75;

    /* Pink */
    --color-pink-50: #fdf2f8;
    --color-pink-100: #fce7f3;
    --color-pink-200: #fbcfe8;
    --color-pink-300: #f9a8d4;
    --color-pink-400: #f472b6;
    --color-pink-500: #ec4899;
    --color-pink-600: #db2777;
    --color-pink-700: #be185d;
    --color-pink-800: #9d174d;
    --color-pink-900: #831843;

    /* Rose */
    --color-rose-50: #fff1f2;
    --color-rose-100: #ffe4e6;
    --color-rose-200: #fecdd3;
    --color-rose-300: #fda4af;
    --color-rose-400: #fb7185;
    --color-rose-500: #f43f5e;
    --color-rose-600: #e11d48;
    --color-rose-700: #be123c;
    --color-rose-800: #9f1239;
    --color-rose-900: #881337;
  }
`;
