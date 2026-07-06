export interface Feature {
	key: string;
	text: string;
}

export interface Booking {
	href: string;
	cls: 'airbnb' | 'holidu' | 'bookingcom';
	label: string;
}

export interface VillaMeta {
	slug: string;
	name: string;
	price: string;
	desc: string;
	descKey: string;
	min: string;
	minKey: string;
	features: Feature[];
	bookings?: Booking[];
}

export const villas: VillaMeta[] = [
	{
		slug: 'villa-tucha',
		name: 'Villa Tucha',
		price: '€260/dia',
		desc: 'Em Alvor, esta villa dispõe de acomodações com acesso Wi-Fi gratuito, ar condicionado, 4 quartos, 5 casas de banho, roupa de cama, toalhas, uma televisão com canais por cabo, uma cozinha totalmente equipada e um terraço com vista da montanha.',
		descKey: 'villa-tucha.desc',
		min: 'Mínimo 5 noites',
		minKey: 'min.5',
		features: [
			{ key: 'tucha.feat.beds',   text: '🛏 4 Quartos' },
			{ key: 'tucha.feat.pax',    text: '👥 8 pax' },
			{ key: 'tucha.feat.wc',     text: '🚿 5 WCs' },
			{ key: 'tucha.feat.pool',   text: '🏊 Piscina' },
			{ key: 'tucha.feat.garage', text: '🚗 Garagem' },
			{ key: 'tucha.feat.beach',  text: '🏖️ Perto de Praias' },
		],
		bookings: [
			{ href: 'https://www.airbnb.pt/rooms/1156370166192959099?source_impression_id=p3_1747993977_P3Taht2su9eJaLPC', cls: 'airbnb', label: 'Airbnb' },
			{ href: 'https://holidu.go.link/holidu.pt/d/51527509?utm_term=CLIPBOARD&utm_source=web_share&adj_t=1m2swn8m&adj_redirect=https://www.holidu.pt/d/51527509?utm_source%3Dweb_share%26utm_term%3DCLIPBOARD', cls: 'holidu', label: 'Holidu' },
			{ href: 'https://www.booking.com/Share-snsEAdC', cls: 'bookingcom', label: 'Booking.com' },
		],
	},
	{
		slug: 'villa-xique-9',
		name: 'Villa Xique 9',
		price: '€95/dia',
		desc: 'Em Monchique, ideal para desfrutar de atividades como caminhadas e ciclismo, este apartamento com ar condicionado tem 2 quartos, uma sala de estar, uma cozinha totalmente equipada e 2 casas de banho com chuveiro, com todas as comodidades providenciadas.',
		descKey: 'villa-xique-9.desc',
		min: 'Mínimo 4 noites',
		minKey: 'min.4',
		features: [
			{ key: 'xique9.feat.beds',    text: '🛍️ 2 Quartos' },
			{ key: 'xique9.feat.pax',     text: '👥 4+1 pax' },
			{ key: 'xique9.feat.wc',      text: '🚿 2 WCs' },
			{ key: 'xique9.feat.kitchen', text: '🍽️ Totalmente equipada' },
			{ key: 'xique9.feat.checkin', text: '🔑 Self Check-in' },
			{ key: 'xique9.feat.center',  text: '🛒 Perto do Centro' },
		],
		bookings: [
			{ href: 'https://www.airbnb.pt/rooms/949875923878022514?guests=1&adults=1&s=67&unique_share_id=a0af3c92-06f4-480b-ab36-4fc48026e6b6', cls: 'airbnb', label: 'Airbnb' },
			{ href: 'https://holidu.go.link/holidu.pt/d/53422304?utm_term=CLIPBOARD&utm_source=web_share&adj_t=1m2swn8m&adj_redirect=https://www.holidu.pt/d/53422304?utm_source%3Dweb_share%26utm_term%3DCLIPBOARD', cls: 'holidu', label: 'Holidu' },
			{ href: 'https://www.booking.com/Share-gAKhBZs', cls: 'bookingcom', label: 'Booking.com' },
		],
	},
	{
		slug: 'villa-xique-11',
		name: 'Villa Xique 11',
		price: '€80/dia',
		desc: 'Em Monchique, ideal para desfrutar de atividades como caminhadas e ciclismo, este apartamento tem 1 quarto com uma agradável casa de banho, uma sala com televisão, uma cozinha equipada com frigorífico e máquina de lavar louça e roupa.',
		descKey: 'villa-xique-11.desc',
		min: 'Mínimo 4 noites',
		minKey: 'min.4',
		features: [
			{ key: 'xique11.feat.beds',    text: '🛍️ 1 cama de casal' },
			{ key: 'xique11.feat.pax',     text: '👥 2+1 pax' },
			{ key: 'xique11.feat.wc',      text: '🚿 1 WC' },
			{ key: 'xique11.feat.kitchen', text: '🍽️ Totalmente equipada' },
			{ key: 'xique11.feat.checkin', text: '🔑 Self Check-in' },
			{ key: 'xique11.feat.center',  text: '🛒 Perto do Centro' },
		],
		bookings: [
			{ href: 'https://www.airbnb.pt/rooms/949870084784436944?guests=1&adults=1&s=67&unique_share_id=92de3315-96bb-411e-92e9-84e4e0f7df85', cls: 'airbnb', label: 'Airbnb' },
			{ href: 'https://holidu.go.link/holidu.pt/d/53520965?utm_term=CLIPBOARD&utm_source=web_share&adj_t=1m2swn8m&adj_redirect=https://www.holidu.pt/d/53520965?utm_source%3Dweb_share%26utm_term%3DCLIPBOARD', cls: 'holidu', label: 'Holidu' },
			{ href: 'https://www.booking.com/Share-eDq7EcI', cls: 'bookingcom', label: 'Booking.com' },
		],
	},
	{
		slug: 'olhao',
		name: 'Villa Eugéne',
		price: '€150/dia',
		desc: 'Em Olhão, a apenas 500 metros das deslumbrantes ilhas da Ria Formosa, a Villa Eugéne é o refúgio perfeito para umas férias em família inesquecíveis, com 2 quartos, piscina privada e um encantador terraço com pérgola para desfrutar do melhor do Algarve.',
		descKey: 'villa-eugene.desc',
		min: 'Mínimo 3 noites',
		minKey: 'min.3',
		features: [
			{ key: 'eugene.feat.beds',    text: '🛏️ 2 Quartos' },
			{ key: 'eugene.feat.sofa',    text: '🛋️ 1 sofá-cama' },
			{ key: 'eugene.feat.pool',    text: '🏊 Piscina privada' },
			{ key: 'eugene.feat.garden',  text: '🌿 Quintal privado' },
			{ key: 'eugene.feat.terrace', text: '☀️ Terraço com pérgola' },
			{ key: 'eugene.feat.ferry',   text: '🏖️ 500m das ilhas' },
		],
	},
];

export const villaBySlug = Object.fromEntries(villas.map(v => [v.slug, v]));
