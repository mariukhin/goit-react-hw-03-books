/*eslint-disable*/
export const mapper = books =>
  books
    .map(({ id, volumeInfo }) => ({
      id,
      volumeInfo,
    }))
    .map(
      item =>
        (item = {
          id: item.id,
          img: item.volumeInfo.imageLinks.thumbnail,
          title: item.volumeInfo.title,
          description: item.volumeInfo.description,
          author: item.volumeInfo.authors,
          publisher: item.volumeInfo.publisher,
          publishedDate: item.volumeInfo.publishedDate,
          pageCount: item.volumeInfo.pageCount,
          rating: item.volumeInfo.averageRating,
        }),
    );

export const descriptionParser = description =>
  description.length >= 200 ? description.slice(0, 200) : description;
