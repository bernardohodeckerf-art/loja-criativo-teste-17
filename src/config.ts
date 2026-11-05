export const academy = {
  name: 'Blu Fit Academia', city: 'Blumenau', state: 'SC',
  instagram: 'https://www.instagram.com/blufitacademia/',
  whatsapp: '', // Somente dígitos com país e DDD, após confirmação.
  address: '', hours: '',
  video: '/videos/hero-4k.mp4', // Pexels, Lucas STAF, 3840 × 2160, 8 segundos, sem áudio.
  videoPoster: '/images/hero-video-poster.webp',
  modalitiesConfirmed: false,
  pricesConfirmed: false,
  plans: [ { name: 'Anual', price: '79,90' }, { name: 'Semestral', price: '89,90' }, { name: 'Trimestral', price: '99,90' }, { name: 'Mensal', price: '159,90' } ],
};
export function contact(message = 'Olá! Quero conhecer a Blu Fit Academia.') {
  return academy.whatsapp ? `https://wa.me/${academy.whatsapp}?text=${encodeURIComponent(message)}` : academy.instagram;
}
export const modalities = [
  { name: 'Boxe', tag: 'TÉCNICA & COORDENAÇÃO', description: 'Encontre seu ritmo. Desenvolva coordenação, condicionamento e técnica a cada movimento.', image: '/images/boxing.jpg' },
  { name: 'Muay Thai', tag: 'FOCO & DISCIPLINA', description: 'Corpo e mente na mesma direção. Explore movimentos, disciplina e novas habilidades.', image: '/images/muaythai.jpg' },
  { name: 'Jiu-jitsu', tag: 'ESTRATÉGIA & CONTROLE', description: 'Cada treino, um aprendizado. Conheça a técnica, a estratégia e o controle no tatame.', image: '/images/jiujitsu.jpg' },
  { name: 'Funcional', tag: 'ENERGIA & MOVIMENTO', description: 'Movimente-se por inteiro. Trabalhe mobilidade, coordenação e condicionamento no seu ritmo.', image: '/images/functional.jpg' },
];
