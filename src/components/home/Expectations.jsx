const { t } = useLanguage();

const items = [
    {
        icon: CheckCircle2,
        title: t('expectations.card1.title'),
        text: t('expectations.card1.text')
    },
    {
        icon: Scale,
        title: t('expectations.card2.title'),
        text: t('expectations.card2.text')
    },
    {
        icon: Truck,
        title: t('expectations.card3.title'),
        text: t('expectations.card3.text')
    },
    {
        icon: Users,
        title: t('expectations.card4.title'),
        text: t('expectations.card4.text')
    }
];

return (
    <section className="expectations section-padding">
        <div className="container">
            <h2 className="section-title text-center">{t('expectations.title')}</h2>
            <div className="expectations-grid">
                {items.map((item, index) => (
                    <ExpectationCard key={index} {...item} />
                ))}
            </div>
        </div>
    </section>
);
};

export default Expectations;
