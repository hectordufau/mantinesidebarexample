export interface Token {
	token_type?: string;
	access_token?: string;
}

export interface User {
	name?: string;
	ativo?: number;
	idperfil?: number;
	id?: number;
	perfil?: Perfil;
}

export interface UserResponse {
	user?: User;
}

export interface Perfil {
	nomeperfil?: string;
	id ?: number;
  }