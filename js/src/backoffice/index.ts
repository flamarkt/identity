app.initializers.add('flamarkt-identity', () => {
    app.extensionData.for('flamarkt-identity')
        .registerSetting({
            setting: 'flamarkt-identity.displayNameFormat',
            type: 'text',
            label: app.translator.trans('flamarkt-identity.backoffice.settings.displayNameFormat'),
            placeholder: '{firstname} {lastname}',
        });
});
