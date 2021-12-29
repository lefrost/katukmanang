export async function toggle(id) {
  return new Promise(async (resolve, reject) => {
    let popup = $(`#${id}`);
    let popupIsToggled = popup.hasClass(`toggled--`);

    if (popupIsToggled) {
      popup.removeClass(`visible--`); // not working
      popup.css(`opacity`, `0`);
      await setTimeout(() => {
        popup.removeClass(`toggled--`); // not working
        popup.css(`display`, `none`);
        resolve();
      }, 200);
    } else {
      popup.addClass(`toggled--`); // not working
      popup.css(`display`, `flex`);
      await setTimeout(() => {
        popup.addClass(`visible--`); // not working
        popup.css(`opacity`, `1`);
        resolve();
      }, 20);
    }
  });
}
