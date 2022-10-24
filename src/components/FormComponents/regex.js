export const validEmail = new RegExp(
	'^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

export const validPostCode = new RegExp('^[0-9]');
export const validStraat = new RegExp('^[a-zA-Z0-9.-]');
export const validHuisnument = new RegExp('^[a-zA-Z0-9.-]');
export const validWoonPlates = new RegExp('^[a-zA-Z0-9.-]');
