import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ja' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ja: {
    // Header
    'nav.skills': 'Skills',
    'nav.works': 'Works',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Jumpei Takei',
    'hero.subtitle': 'Business Producer / Creative Director',

    // Skills
    'skills.title': 'Skills',
    'skills.business.title': '事業推進',
    'skills.business.desc': '思いきり体重を乗せてプロジェクトに入り込みます。整理されていない状態や、誰も理解できない社長の構想をなぜか理解して高速で要件を整理します。そして勝手に自ら責任を背負って追い込まれ、徹夜しながら売上に繋げて戻ってきます。',
    'skills.planning.title': '企画提案/戦略策定',
    'skills.planning.desc': '真面目に要件を整理しながら、最も不真面目な企画を提案します。構想起案、コンセプト作り、事業計画作成、説明資料、実施計画書への落とし込みまで、任された範囲を無視しながら実現まで持っていきます。',
    'skills.consulting.title': 'コンサルティング',
    'skills.consulting.desc': 'かなり柔軟に高めの熱量と最新のトレンドやムーブメントを織り交ぜてコンサルティング/提案します。実施要件をロードマップに落とし込み、組織としての大方針から役割分担まで細やかに設計します。',
    'skills.engineering.title': 'エンジニアリング',
    'skills.engineering.desc': 'プロダクトの要件定義作成からワイヤーフレームデザイン、システム設計書、コーディング、動画などのコンテンツ制作まで一括で引き受けます。最近は一切コードに触れずにAIで完結する方を好んで提案します。',
    'skills.branding.title': 'ブランディング',
    'skills.branding.desc': '社会の感情や流れを汲んだブランディングプランを立案し、コンセプト資料作成、KV/コピー制作、クリエイティブ/LP制作、その他様々なアウトプットに繋げていきます。',
    'skills.ai.title': 'AIワークフロー作成',
    'skills.ai.desc': '最新の生成AI、AIエージェントを週次で更新し、ワークフローを自動化するために最適なAIで提案できます。表層的な使い方ではなく、バックエンドの繋ぎ込みまで考えてちゃんと役に立つカスタマイズAIワークフローを実現します。',

    // Works
    'works.title': 'Works',
    'works.blackthunder.title': 'ブラックサンダー ブランディング',
    'works.blackthunder.desc': 'キャンペーン制作企画・ディレクション',
    'works.park24.title': 'PARK24データ移管',
    'works.park24.desc': 'データ移管システムの要件定義、ワークフローデザイン',
    'works.immersive.title': 'イマーシブ体験設計',
    'works.immersive.desc': '企画、設計、施工管理',
    'works.3darvi.title': '航空気象システム 海外戦略',
    'works.3darvi.desc': '海外営業',
    'works.ip.title': 'IP活用事業',
    'works.ip.desc': 'PR企画、ブランディング',
    'works.scm.title': 'SCM ワークフローデザイン',
    'works.scm.desc': 'モックアップ/デモ動画作成',

    // About
    'about.title': 'About',
    'about.name': '竹井淳平 / Jumpei Takei',
    'about.role': 'Business Producer / Creative Director',
    'about.bio': 'ビジネスとクリエイティブの両輪を回しながら、プロジェクトを成功に導きます。複雑な課題を整理し、実現可能な形に落とし込むことが得意です。',

    // Contact
    'contact.title': 'Contact',
    'contact.cta': 'お問い合わせはこちら',
  },
  en: {
    // Header
    'nav.skills': 'Skills',
    'nav.works': 'Works',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Jumpei Takei',
    'hero.subtitle': 'Business Producer / Creative Director',

    // Skills
    'skills.title': 'Skills',
    'skills.business.title': 'Business Development',
    'skills.business.desc': 'I dive deep into projects with full commitment. I quickly organize requirements from chaotic situations and somehow understand even the most abstract visions. I take responsibility, work tirelessly, and deliver results.',
    'skills.planning.title': 'Planning & Strategy',
    'skills.planning.desc': 'While organizing requirements seriously, I propose the most unconventional ideas. From conception to business plans, presentations, and implementation guides—I push beyond my assigned scope to make things happen.',
    'skills.consulting.title': 'Consulting',
    'skills.consulting.desc': 'I provide consulting with high energy and the latest trends. I create roadmaps from implementation requirements and design everything from organizational policies to role assignments.',
    'skills.engineering.title': 'Engineering',
    'skills.engineering.desc': 'From product requirements to wireframe design, system specifications, coding, and video content creation—I handle it all. Recently, I prefer proposing AI-powered solutions that require no coding.',
    'skills.branding.title': 'Branding',
    'skills.branding.desc': 'I develop branding plans that capture social emotions and trends, creating concept materials, key visuals, copy, creatives, and various other outputs.',
    'skills.ai.title': 'AI Workflow Creation',
    'skills.ai.desc': 'I stay updated weekly with the latest generative AI and AI agents, proposing the optimal AI for workflow automation. Not just surface-level usage, but properly integrated backend solutions.',

    // Works
    'works.title': 'Works',
    'works.blackthunder.title': 'Black Thunder Branding',
    'works.blackthunder.desc': 'Campaign Planning & Direction',
    'works.park24.title': 'PARK24 Data Migration',
    'works.park24.desc': 'Requirements Definition & Workflow Design',
    'works.immersive.title': 'Immersive Experience Design',
    'works.immersive.desc': 'Planning, Design, Construction Management',
    'works.3darvi.title': 'Aviation Weather System',
    'works.3darvi.desc': 'International Sales',
    'works.ip.title': 'IP Utilization Business',
    'works.ip.desc': 'PR Planning, Branding',
    'works.scm.title': 'SCM Workflow Design',
    'works.scm.desc': 'Mockup / Demo Video Creation',

    // About
    'about.title': 'About',
    'about.name': 'Jumpei Takei',
    'about.role': 'Business Producer / Creative Director',
    'about.bio': 'I drive projects to success by balancing business and creativity. My strength lies in organizing complex challenges and transforming them into achievable solutions.',

    // Contact
    'contact.title': 'Contact',
    'contact.cta': 'Get in Touch',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ja');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ja']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
