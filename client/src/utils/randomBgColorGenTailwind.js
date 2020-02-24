export const randomBgColorGenTailwind = () => {
  const colors = [
    'bg-red-200',
    'bg-green-200',
    'bg-blue-200',
    'bg-teal-200',
    'bg-yellow-200',
    'bg-orange-200',
    'bg-pink-200',
    'bg-indigo-200',
    'bg-purple-200',
    'bg-red-600',
    'bg-green-600',
    'bg-blue-600',
    'bg-teal-600',
    'bg-yellow-600',
    'bg-orange-600',
    'bg-pink-600',
    'bg-indigo-600',
    'bg-purple-600'
  ];

  const ran = Math.floor(Math.random() * 18);

  return colors[ran];
};
