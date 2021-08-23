type AllType<T, U> = {
    [P in keyof T]: U;
};
