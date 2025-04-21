import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function FacturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4 md:px-8">
          <div className="flex items-center gap-2 font-semibold">
            <FileText className="h-6 w-6" />
            <span className="text-lg">FacturePro</span>
          </div>
          <nav className="ml-auto flex items-center gap-4 md:gap-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">Tableau de bord</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/devis">Devis</Link>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link href="/factures">Factures</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/clients">Clients</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/parametres">Paramètres</Link>
            </Button>
          </nav>
        </div>
      </div>
      <main className="flex-1 p-4 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Factures</h1>
            <p className="text-muted-foreground">
              Gérez vos factures et suivez les paiements
            </p>
          </div>
          <Button asChild>
            <Link href="/factures/nouvelle">
              <Plus className="mr-2 h-4 w-4" />
              Nouvelle facture
            </Link>
          </Button>
        </div>
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
            <Input
              type="search"
              placeholder="Rechercher une facture..."
              className="pl-8"
            />
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="tous">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tous">Tous les statuts</SelectItem>
                <SelectItem value="brouillon">Brouillon</SelectItem>
                <SelectItem value="envoyee">Envoyée</SelectItem>
                <SelectItem value="payee">Payée</SelectItem>
                <SelectItem value="en-retard">En retard</SelectItem>
                <SelectItem value="annulee">Annulée</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="recent">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Plus récent</SelectItem>
                <SelectItem value="ancien">Plus ancien</SelectItem>
                <SelectItem value="montant-asc">Montant (croissant)</SelectItem>
                <SelectItem value="montant-desc">
                  Montant (décroissant)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-6 rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Numéro</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Échéance</TableHead>
                <TableHead>Montant</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "FAC-2023-038",
                  client: "Entreprise ABC",
                  date: "15/04/2023",
                  echeance: "15/05/2023",
                  montant: "1 250,00 €",
                  status: "Payée",
                },
                {
                  id: "FAC-2023-037",
                  client: "Société XYZ",
                  date: "12/04/2023",
                  echeance: "12/05/2023",
                  montant: "3 780,00 €",
                  status: "Envoyée",
                },
                {
                  id: "FAC-2023-036",
                  client: "Client Particulier",
                  date: "10/04/2023",
                  echeance: "10/05/2023",
                  montant: "450,00 €",
                  status: "Payée",
                },
                {
                  id: "FAC-2023-035",
                  client: "Entreprise 123",
                  date: "05/04/2023",
                  echeance: "05/05/2023",
                  montant: "2 100,00 €",
                  status: "En retard",
                },
                {
                  id: "FAC-2023-034",
                  client: "Association DEF",
                  date: "01/04/2023",
                  echeance: "01/05/2023",
                  montant: "890,00 €",
                  status: "Brouillon",
                },
              ].map((facture) => (
                <TableRow key={facture.id}>
                  <TableCell className="font-medium">{facture.id}</TableCell>
                  <TableCell>{facture.client}</TableCell>
                  <TableCell>{facture.date}</TableCell>
                  <TableCell>{facture.echeance}</TableCell>
                  <TableCell>{facture.montant}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        facture.status === "Payée"
                          ? "bg-green-100 text-green-800"
                          : facture.status === "Envoyée"
                            ? "bg-blue-100 text-blue-800"
                            : facture.status === "Brouillon"
                              ? "bg-gray-100 text-gray-800"
                              : facture.status === "En retard"
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {facture.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Link
                            href={`/factures/${facture.id}`}
                            className="flex w-full items-center"
                          >
                            Voir le détail
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            href={`/factures/${facture.id}/modifier`}
                            className="flex w-full items-center"
                          >
                            Modifier
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Télécharger PDF
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Marquer comme payée</DropdownMenuItem>
                        <DropdownMenuItem>Envoyer un rappel</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-muted-foreground text-sm">
            Affichage de 1 à 5 sur 38 entrées
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Page précédente</span>
            </Button>
            <Button variant="outline" size="sm" className="px-4">
              1
            </Button>
            <Button variant="outline" size="sm" className="px-4">
              2
            </Button>
            <Button variant="outline" size="sm" className="px-4">
              3
            </Button>
            <Button variant="outline" size="sm">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Page suivante</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
