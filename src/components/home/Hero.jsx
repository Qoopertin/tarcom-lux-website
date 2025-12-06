
React.useEffect(() => {
    const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % verbs.length);
    }, 2000);
    return () => clearInterval(interval);
}, [verbs.length]);

return (
    <section className="hero">
        <div className="hero-background">
            <div className="overlay"></div>
            <img
                src="/images/hero-apple-hq.jpg"
                alt="Hand holding apple"
                className="hero-bg-img"
            />
        </div>

        <div className="container hero-content">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-text-center"
            >
                <div className="hero-slogan-container">
                    <h1 className="hero-static-we">{t('hero.we')}</h1>
                    <div className="hero-animated-verbs">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={verbs[index]}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5 }}
                                className="highlight-verb"
                            >
                                {verbs[index]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>

                <p className="hero-subtitle">
                    {t('hero.subtitle')}
                </p>
            </motion.div>
        </div>
    </section>
);
};

export default Hero;
