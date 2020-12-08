import { handleSubmit } from './js/formHandler'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'

const button = document.getElementById("button");
button.addEventListener('click', (e) => {
    handleSubmit(e);
})