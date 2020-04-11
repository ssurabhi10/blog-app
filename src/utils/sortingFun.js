export const postCountSorting = (a, b) => {
    let x = a['post_count']; 
    let y = b['post_count'];
    return ((x < y) ? 1 : ((x > y) ? -1 : 0));
};
