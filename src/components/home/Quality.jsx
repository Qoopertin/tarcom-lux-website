import React from 'react';
import { FileCheck, ShieldCheck, FileText } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Quality.css';

const Quality = () => {
    const { t } = useLanguage();

    return (
        <section className="quality section-padding">
            <div className="container">
                <div className="quality-content text-center">
                    <h2 className="section-title">{t('quality.title')}</h2>

                    <div className="quality-text-block">
                        <p className="lead-text">
                            {t('quality.text1')}
                        </p>
                        <p>
                            {t('quality.text2')}
                        </p>
                    </div>

                    <div className="docs-grid">
                        <div className="doc-item">
                            <FileCheck size={32} className="doc-icon" />
                            <span>Phytosanitary certificate</span>
                        </div>
                        <div className="doc-item">
                            <ShieldCheck size={32} className="doc-icon" />
                            <span>Pesticide residue analysis</span>
                        </div>
                        <div className="doc-item">
                            <FileText size={32} className="doc-icon" />
                            <span>EUR.1 certificate</span>
                        </div>
                        <div className="doc-item">
                            <FileText size={32} className="doc-icon" />
                            <span>Commercial invoice & packing list</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quality;
