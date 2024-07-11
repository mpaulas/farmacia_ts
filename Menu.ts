import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";


export function main() {

    let opcao: number;
    

    while (true) {
        console.log(colors.bg.black, colors.fg.yellowstrong);
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                FARMÁCIA BEM ESTAR                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todos Produtos                ");
        console.log("            3 - Buscar Produto por ID                ");
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",colors.reset);

        console.log(colors.fg.whitestrong, "Entre com a opção desejada: ",colors.reset);
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log("\nFarmácia Bem Estar - Remédio Barato é aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Produto\n\n", colors.reset);
                 
                break;
            case 2:
                console.log(colors.fg.whitestrong,"\n\nListar todos os Produtos\n\n", colors.reset);
                
                
                keyPress();
                break;
            case 3:
                console.log(colors.fg.whitestrong,"\n\nConsultar Produtos - por ID\n\n", colors.reset);
               
                keyPress();
                break;
            case 4:
                console.log(colors.fg.whitestrong,"\n\nAtualizar dados do Produto\n\n", colors.reset);

                break;

            case 5:
                console.log(colors.fg.whitestrong,"\n\nApagar um Produto\n\n", colors.reset);

                keyPress();
                break;
            

                keyPress();
                break;
            default:
                console.log(colors.fg.whitestrong,"\nOpção Inválida!\n", colors.reset);

                break;
        }
    }

}



export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Maria Paula");
    console.log("Generation Brasil - maria.alves@genstudents.org");
    console.log("github.com/mpaulas/generation.git");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
 

main();