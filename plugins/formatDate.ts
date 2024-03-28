export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.directive("date-formatted", {
      mounted(el) {
        const value = el.innerText;
        el.innerHTML = formatDate(value);
      },
    });
  });
  
  const formatDate = (value: string) => {
    const [day, month] = value.split('-').map(Number);
    const date = new Date(2000, month - 1, day);
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('pt-BR', options);

    return formattedDate;
  };