import { classNames } from '@marulloc/components-library/utils';

const text = {
  color: {
    base: {
      main: classNames('text-gray-800'),
      muted: classNames('text-gray-700'),
      background: classNames('bg-gray-100'),
      hover: classNames('hover:bg-gray-200'),
      disabled: classNames('opacity-50'),
    },
    primary: {
      main: classNames('text-indigo-600'),
      muted: classNames('text-indigo-400'),
      hover: classNames('hover:text-indigo-700'),
      disabled: classNames('text-indigo-200'),
    },
    secondary: {
      main: classNames('text-green-600'),
      muted: classNames('text-green-400'),
      hover: classNames('hover:text-green-700'),
      disabled: classNames('text-green-200'),
    },
  },
  size: {
    small: classNames('text-xs sm:text-sm'),
    medium: classNames('text-sm sm:text-base md:text-lg'),
    large: classNames('text-base sm:text-lg md:text-xl'),
  },
};

const fill = {
  base: {
    main: classNames('bg-gray-100'),
    muted: classNames('bg-gray-200'),
    hover: classNames('hover:bg-gray-300'),
    disabled: classNames('opacity-50'),
  },
  primary: {
    main: classNames('bg-indigo-500'),
    muted: classNames('bg-indigo-400'),
    hover: classNames('hover:bg-indigo-600'),
    disabled: classNames('opacity-50'),
  },
  secondary: {
    main: classNames('bg-green-500'),
    muted: classNames('bg-green-400'),
    hover: classNames('hover:bg-green-600'),
    disabled: classNames('opacity-50'),
  },
};

const border = {
  base: {
    main: classNames('border-gray-300'),
    muted: classNames('border-gray-200'),
    hover: classNames('hover:border-gray-400'),
    disabled: classNames('opacity-50'),
  },
  primary: {
    main: classNames('border-indigo-500'),
    muted: classNames('border-indigo-400'),
    hover: classNames('hover:border-indigo-600'),
    disabled: classNames('opacity-50'),
  },
  secondary: {
    main: classNames('border-green-500'),
    muted: classNames('border-green-400'),
    hover: classNames('hover:border-green-600'),
    disabled: classNames('opacity-50'),
  },
};

const spacing = {
  margin: {
    xy: {
      small: classNames('m-1 sm:m-2'),
      medium: classNames('m-2 sm:m-4 md:m-6'),
      large: classNames('m-4 sm:m-8 md:m-12'),
    },
    x: {
      small: classNames('mx-1 sm:mx-2'),
      medium: classNames('mx-2 sm:mx-4 md:mx-6'),
      large: classNames('mx-4 sm:mx-8 md:mx-12'),
    },
    y: {
      small: classNames('my-1 sm:my-2'),
      medium: classNames('my-2 sm:my-4 md:my-6'),
      large: classNames('my-4 sm:my-8 md:my-12'),
    },
  },
  padding: {
    xy: {
      small: classNames('p-1 sm:p-2'),
      medium: classNames('p-2 sm:p-4 md:p-6'),
      large: classNames('p-4 sm:p-8 md:p-12'),
    },
    x: {
      small: classNames('px-1 sm:px-2'),
      medium: classNames('px-2 sm:px-4 md:px-6'),
      large: classNames('px-4 sm:px-8 md:px-12'),
    },
    y: {
      small: classNames('py-1 sm:py-2'),
      medium: classNames('py-2 sm:py-4 md:py-6'),
      large: classNames('py-4 sm:py-8 md:py-12'),
    },
  },
};

export const localTheme = {
  text,
  fill,
  border,
  spacing,
};

/**
 * Removed dark mode support due to white background images rendering dark mode ineffective
 */

//
// const text = {
//   color: {
//     base: {
//       main: classNames('text-gray-800 dark:text-gray-200'),
//       muted: classNames('text-gray-700 dark:text-gray-300'),
//       background: classNames('bg-gray-100 dark:bg-gray-800'),
//       hover: classNames('hover:bg-gray-200 dark:hover:bg-gray-700'),
//       disabled: classNames('opacity-50'),
//     },
//     primary: {
//       main: classNames('text-indigo-600 dark:text-indigo-200'),
//       muted: classNames('text-indigo-400 dark:text-indigo-400'),
//       hover: classNames('hover:text-indigo-700 dark:hover:text-indigo-300'),
//       disabled: classNames('text-indigo-200 dark:text-indigo-500'),
//     },
//     secondary: {
//       main: classNames('text-green-600 dark:text-green-200'),
//       muted: classNames('text-green-400 dark:text-green-400'),
//       hover: classNames('hover:text-green-700 dark:hover:text-green-300'),
//       disabled: classNames('text-green-200 dark:text-green-500'),
//     },
//   },
//   size: {
//     small: classNames('text-xs sm:text-sm'),
//     medium: classNames('text-sm sm:text-base md:text-lg'),
//     large: classNames('text-base sm:text-lg md:text-xl'),
//   },
// };

// const fill = {
//   base: {
//     main: classNames('bg-gray-100 dark:bg-gray-900'),
//     muted: classNames('bg-gray-200 dark:bg-gray-800'),
//     hover: classNames('hover:bg-gray-300 dark:hover:bg-gray-700'),
//     disabled: classNames('opacity-50'),
//   },
//   primary: {
//     main: classNames('bg-indigo-500 dark:bg-indigo-900'),
//     muted: classNames('bg-indigo-400 dark:bg-indigo-800'),
//     hover: classNames('hover:bg-indigo-600 dark:hover:bg-indigo-700'),
//     disabled: classNames('opacity-50'),
//   },
//   secondary: {
//     main: classNames('bg-green-500 dark:bg-green-900'),
//     muted: classNames('bg-green-400 dark:bg-green-800'),
//     hover: classNames('hover:bg-green-600 dark:hover:bg-green-700'),
//     disabled: classNames('opacity-50'),
//   },
// };

// const border = {
//   base: {
//     main: classNames('border-gray-300 dark:border-gray-700'),
//     muted: classNames('border-gray-200 dark:border-gray-600'),
//     hover: classNames('hover:border-gray-400 dark:hover:border-gray-500'),
//     disabled: classNames('opacity-50'),
//   },
//   primary: {
//     main: classNames('border-indigo-500 dark:border-indigo-900'),
//     muted: classNames('border-indigo-400 dark:border-indigo-800'),
//     hover: classNames('hover:border-indigo-600 dark:hover:border-indigo-700'),
//     disabled: classNames('opacity-50'),
//   },
//   secondary: {
//     main: classNames('border-green-500 dark:border-green-900'),
//     muted: classNames('border-green-400 dark:border-green-800'),
//     hover: classNames('hover:border-green-600 dark:hover:border-green-700'),
//     disabled: classNames('opacity-50'),
//   },
// };

// const spacing = {
//   margin: {
//     xy: {
//       small: classNames('m-1 sm:m-2'),
//       medium: classNames('m-2 sm:m-4 md:m-6'),
//       large: classNames('m-4 sm:m-8 md:m-12'),
//     },
//     x: {
//       small: classNames('mx-1 sm:mx-2'),
//       medium: classNames('mx-2 sm:mx-4 md:mx-6'),
//       large: classNames('mx-4 sm:mx-8 md:mx-12'),
//     },
//     y: {
//       small: classNames('my-1 sm:my-2'),
//       medium: classNames('my-2 sm:my-4 md:my-6'),
//       large: classNames('my-4 sm:my-8 md:my-12'),
//     },
//   },
//   padding: {
//     xy: {
//       small: classNames('p-1 sm:p-2'),
//       medium: classNames('p-2 sm:p-4 md:p-6'),
//       large: classNames('p-4 sm:p-8 md:p-12'),
//     },
//     x: {
//       small: classNames('px-1 sm:px-2'),
//       medium: classNames('px-2 sm:px-4 md:px-6'),
//       large: classNames('px-4 sm:px-8 md:px-12'),
//     },
//     y: {
//       small: classNames('py-1 sm:py-2'),
//       medium: classNames('py-2 sm:py-4 md:py-6'),
//       large: classNames('py-4 sm:py-8 md:py-12'),
//     },
//   },
// };
