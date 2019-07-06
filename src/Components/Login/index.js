import * as React from 'react';
import { AzureAD, LoginType, MsalAuthProviderFactory } from 'react-aad-msal';
//import { basicReduxStore } from '../../reduxStore';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        let redirectEnabled = sessionStorage.getItem('redirectEnabled') || true;
        this.state = {
            redirectEnabled: redirectEnabled,
        };
    }

    unauthenticatedFunction = loginFunction => {
        loginFunction();
    };

    userJustLoggedIn = receivedAccountInfo => {

        this.props.accountInfoCallback(receivedAccountInfo);
    };

    authenticatedFunction = logout => {
        return (
            <div>
            </div>
        );
    };

    config = {
        auth: {
            clientId: "06729816-d8d4-490d-ba59-af35c1e0d48c",
            authority: "https://login.microsoftonline.com/430aed03-4140-455d-be50-5816497875f1/",
        },
        cache: {
            cacheLocation: "localStorage",
            storeAuthStateInCookie: true
        }
    };

    authenticationParameters = {
        scopes: [
            'openid profile https://graph.microsoft.com/mail.read',
        ]
    }

    render() {
        return (
            <div>
                <AzureAD
                    provider={
                        new MsalAuthProviderFactory(
                            this.config,
                            this.authenticationParameters,
                            LoginType.Redirect,
                        )
                    }
                    unauthenticatedFunction={this.unauthenticatedFunction}
                    accountInfoCallback={this.userJustLoggedIn}
                    authenticatedFunction={this.authenticatedFunction}
                />
            </div>
        );
    }
}

export default LoginComponent;