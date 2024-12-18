// this file is @generated
import {
    IntrospectionRequest,
    IntrospectionRequestSerializer,
} from '../models/introspectionRequest';
import {
    RevocationRequest,
    RevocationRequestSerializer,
} from '../models/revocationRequest';
import {
    TokenIntrospectionResponse,
    TokenIntrospectionResponseSerializer,
} from '../models/tokenIntrospectionResponse';
import {
    TokenRequest,
    TokenRequestSerializer,
} from '../models/tokenRequest';
import {
    TokenResponse,
    TokenResponseSerializer,
} from '../models/tokenResponse';
import { HttpMethod, AllstaskRequest, AllstaskRequestContext } from "../request";

export class OAuth {
    public constructor(private readonly requestCtx: AllstaskRequestContext) {}

    /**
* Token introspection endpoint (RFC 7662). Requires client credentials
* via HTTP Basic auth.
*/
        public introspectEndpoint(
            introspectionRequest: IntrospectionRequest,
            ): Promise<TokenIntrospectionResponse> {
            const request = new AllstaskRequest(HttpMethod.POST, "/api/v1/oauth/introspect");

            request.setBody(
                    IntrospectionRequestSerializer._toJsonObject(
                        introspectionRequest,
                    )
                );
            
                return request.send(
                    this.requestCtx,
                    TokenIntrospectionResponseSerializer._fromJsonObject,
                );
            }

        

    /**
* Token revocation endpoint (RFC 7009). Always returns 200 per spec.
* Requires client credentials via HTTP Basic auth.
*/
        public revokeEndpoint(
            revocationRequest: RevocationRequest,
            ): Promise<void> {
            const request = new AllstaskRequest(HttpMethod.POST, "/api/v1/oauth/revoke");

            request.setBody(
                    RevocationRequestSerializer._toJsonObject(
                        revocationRequest,
                    )
                );
            
                return request.sendNoResponseBody(this.requestCtx);
            }

        

    /**
* OAuth 2.0 token endpoint. Supports two grant types:
* - `authorization_code`: Exchange an authorization code for tokens
* - `refresh_token`: Refresh an access token
* 
* Authenticate via HTTP Basic auth (`client_id:client_secret`) or body parameters.
*/
        public tokenEndpoint(
            tokenRequest: TokenRequest,
            ): Promise<TokenResponse> {
            const request = new AllstaskRequest(HttpMethod.POST, "/api/v1/oauth/token");

            request.setBody(
                    TokenRequestSerializer._toJsonObject(
                        tokenRequest,
                    )
                );
            
                return request.send(
                    this.requestCtx,
                    TokenResponseSerializer._fromJsonObject,
                );
            }

        

    }

