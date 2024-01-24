const date = new Date();
const formatDate = new Intl.DateTimeFormat("es", {
  hour: "numeric",
  minute: "numeric",
}).format(date);
export const todos = [
  {
    title: "Crea tu primer card",
    id: Date.now(),
    list: "to-do",
    user: {
      name: "Brayan",
      avatar: "../../../profiles-main.jpg",
    },
    date: formatDate,
  },
];
