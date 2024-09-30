export default function CreateRelatedEntity(clientAPI) {
    if (clientAPI.getODataProvider('/risks_mobile/Services/RiskManagementService.service').isDraftEnabled('Mitigations')) {
        let readLink = clientAPI.binding['@odata.readLink'];
        return clientAPI.executeAction({
            'Name': '/risks_mobile/Actions/RiskManagementService/Mitigations/Mitigations_CreateRisks.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/risks_mobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Mitigations',
                        'ReadLink': readLink
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/risks_mobile/Actions/RiskManagementService/Mitigations/Mitigations_CreateRisks.action');
    }
}