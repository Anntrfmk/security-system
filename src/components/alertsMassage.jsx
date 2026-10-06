import toast from 'react-hot-toast';

export const showMassage = (state) => {
  switch (state) {
    case 'turnOn':
      toast('Поставлено під охорону',{icon:'🔒'});
      break;
    case 'night':
      toast('Увімкнено нічний режим', { icon: '🌚' });
      break;
    case 'alarm':
      toast('Помічено рух', { icon: '🚨' });
      break;
    case 'default':
      toast('Знято з охорони',{icon: '🔓'});
      break;
    default:
      break;
  }
};