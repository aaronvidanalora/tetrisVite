import { header } from "../componentes/header";
import { ranking } from "../vistas/ranking";

document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('main').innerHTML = ranking.template
ranking.script()
