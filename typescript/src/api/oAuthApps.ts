// this file is @generated
import {
    CreateOAuthAppRequest,
    CreateOAuthAppRequestSerializer,
} from '../models/createOAuthAppRequest';
import {
    OAuthApp,
    OAuthAppSerializer,
} from '../models/oAuthApp';
import {
    OAuthAppWithSecret,
    OAuthAppWithSecretSerializer,
} from '../models/oAuthAppWithSecret';
import {
    OAuthAppsResponse,
    OAuthAppsResponseSerializer,
} from '../models/oAuthAppsResponse';
import {
    RotatedSecret,
    RotatedSecretSerializer,
} from '../models/rotatedSecret';
import { HttpMethod, AllstaskRequest, AllstaskRequestContext } from "../request";

export class OAuthApps {
    public constructor(private readonly requestCtx: AllstaskRequestContext) {}

    /** List all OAuth applications registered for this platform. */
        public listOauthApps(
            ): Promise<OAuthAppsResponse> {
            const request = new AllstaskRequest(HttpMethod.GET, "/api/v1/oauth-apps");

            
                return request.send(
                    this.requestCtx,
                    OAuthAppsResponseSerializer._fromJsonObject,
                );
            }

        

    /**
* Register a new OAuth application. Returns the app with its client secret
* (only shown once).
*/
        public createOauthApp(
            createOAuthAppRequest: CreateOAuthAppRequest,
            ): Promise<OAuthAppWithSecret> {
            const request = new AllstaskRequest(HttpMethod.POST, "/api/v1/oauth-apps");

            request.setBody(
                    CreateOAuthAppRequestSerializer._toJsonObject(
                        createOAuthAppRequest,
                    )
                );
            
                return request.send(
                    this.requestCtx,
                    OAuthAppWithSecretSerializer._fromJsonObject,
                );
            }

        

    /** Retrieve an OAuth application by ID. */
        public getOauthApp(
            id: string,
            ): Promise<OAuthApp> {
            const request = new AllstaskRequest(HttpMethod.GET, "/api/v1/oauth-apps/{id}");

            request.setPathParam("id", id);
            
                return request.send(
                    this.requestCtx,
                    OAuthAppSerializer._fromJsonObject,
                );
            }

        

    /** Delete an OAuth application and revoke all associated tokens. */
        public deleteOauthApp(
            id: string,
            ): Promise<void> {
            const request = new AllstaskRequest(HttpMethod.DELETE, "/api/v1/oauth-apps/{id}");

            request.setPathParam("id", id);
            
                return request.sendNoResponseBody(this.requestCtx);
            }

        

    /**
* Generate a new client secret for an OAuth app. The old secret is
* immediately invalidated.
*/
        public rotateClientSecret(
            id: string,
            ): Promise<RotatedSecret> {
            const request = new AllstaskRequest(HttpMethod.POST, "/api/v1/oauth-apps/{id}/rotate");

            request.setPathParam("id", id);
            
                return request.send(
                    this.requestCtx,
                    RotatedSecretSerializer._fromJsonObject,
                );
            }

        

    }

