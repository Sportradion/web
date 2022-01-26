export default class DataService {
  _data = {
    react95Repo: "https://github.com/React95/React95",
    items: [
      {
        id: "about",
        name: "Sport.txt",
        icon: "info_bubble",
        content: {
          paragraphs: [
            "Hej och välkommen,kul att du kunde komma. Vi har öppet 9-17 varje vardag. Musik kommer på soundcloud.com/sportradion",
            ,
          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}
