/**
 * Contains the miscellaneous route handlers.
 * @author Esther Adedokun <https://github.com/EbunAdee>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
