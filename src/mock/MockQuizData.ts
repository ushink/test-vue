export interface Quiz {
  id: number
  title: string
  questionText: string
  options: string[]
  right: string[]
}

export const MockQuizData: Quiz[] = [
  {
    id: 1,
    title: 'Вопрос 1',
    questionText: 'Что такое переменная в JavaScript?',
    options: [
      'Функция, которая выполняет определенный набор действий.',
      'Место в памяти, где хранится значение.',
      'Строка символов.',
      'Метод для работы с массивами.'
    ],
    right: ['Место в памяти, где хранится значение.']
  },
  {
    id: 2,
    title: 'Вопрос 2',
    questionText: 'Какие типы данных существуют в JavaScript?',
    options: ['Числа', 'Cтроки', 'Булевы значения', 'Объекты', 'Символы', 'Массивы'],
    right: ['Числа', 'Cтроки', 'Булевы значения', 'Объекты', 'Символы']
  },
  {
    id: 3,
    title: 'Вопрос 3',
    questionText: 'Что делает функция parseInt() в JavaScript?',
    options: [
      'Преобразует строку в целое число.',
      'Преобразует строку в булево значение.',
      'Удаляет пробелы из строки.',
      'Конвертирует строку в массив символов.'
    ],
    right: ['Преобразует строку в целое число.']
  },
  {
    id: 4,
    title: 'Вопрос 4',
    questionText: 'Что такое ES6?',
    options: [
      'Старый стандарт ECMAScript, выпущенный в 2009 году.',
      'Новый стандарт ECMAScript, выпущенный в 2015 году.',
      'Версия JavaScript, используемая только в браузерах.',
      'Версия JavaScript, используемая только на серверах.'
    ],
    right: ['Новый стандарт ECMAScript, выпущенный в 2015 году.']
  },
  {
    id: 5,
    title: 'Вопрос 5',
    questionText: 'Что делает оператор === в JavaScript?',
    options: [
      'Сравнивает значения двух переменных.',
      'Проверяет, являются ли два значения равными по значению и типу.',
      'Принудительно преобразует значения перед сравнением.',
      'Возвращает разницу между двумя числами.'
    ],
    right: ['Проверяет, являются ли два значения равными по значению и типу.']
  },
  {
    id: 6,
    title: 'Вопрос 6',
    questionText: 'Какой результат даст следующий код: console.log(0.1 + 0.2 == 0.3)?',
    options: ['true', 'false', 'Ошибка', 'Неопределенное поведение'],
    right: ['false']
  },
  {
    id: 7,
    title: 'Вопрос 7',
    questionText: 'Что такое "хэш-таблица" в контексте JavaScript?',
    options: [
      'Структура данных, используемая для хранения пар ключ-значение.',
      'Способ сортировки элементов в массиве.',
      'Метод для удаления всех элементов из массива.',
      'Функция для генерации случайных чисел.'
    ],
    right: ['Структура данных, используемая для хранения пар ключ-значение.']
  },
  {
    id: 8,
    title: 'Вопрос 8',
    questionText: 'Что делает конструкция const в JavaScript?',
    options: [
      'Преобразует все переменные в константы.',
      'Создает новую переменную, которую можно изменить после ее объявления.',
      'Удаляет все переменные с именем, указанным в скобках.',
      'Создает новую переменную, которую нельзя изменить после ее объявления.'
    ],
    right: ['Создает новую переменную, которую нельзя изменить после ее объявления.']
  }
]

export const MockRightData: number[][] = [[1], [0, 1, 2, 3, 4], [0], [1], [1], [1], [0], [3]]
