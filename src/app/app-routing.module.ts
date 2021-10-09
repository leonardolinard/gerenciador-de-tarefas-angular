import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TarefaRoutes } from "./tarefas";

export const router: Routes = [
    {
        path: '',
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
    },
    ...TarefaRoutes
];//aqui estarao as minhas rotas

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [
        RouterModule,
    ]
})

export class AppRoutingModule { }