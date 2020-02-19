export const randomBgColorGenTailwind = () => {
  const colors = ['bg-red-200', 'bg-green-200', 'bg-blue-200', 'bg-teal-200', 'bg-yellow-200', 'bg-orange-200', 'bg-pink-200', 'bg-indigo-200', 'bg-purple-200'];

  const ran = Math.floor(Math.random() * 9);

  return colors[ran];
};
