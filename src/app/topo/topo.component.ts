import { Component } from "@angular/core";

/**
 * Decorator - informa metadados atraves de um json
 */
@Component({
    selector: 'app-topo',//rotulo para instancia
    templateUrl: './topo.component.html', //arquivo de view
    styleUrls: ['./topo.component.css']
})

export class TopoComponent {
    /**
     * One way data bind - coloco no componente a propriedade da classe entre {{nomeDaPropriedade}}
     */
    public titulo: String = "String interlation";

}