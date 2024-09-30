export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/risks_mobile/Services/RiskManagementService.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/risks_mobile/Actions/RiskManagementService/Risks/Risks_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/risks_mobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Risks'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/risks_mobile/Actions/RiskManagementService/Risks/Risks_UpdateEntity.action');
    }
}