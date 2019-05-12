export default function mapper(books) {
  return books
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
}
