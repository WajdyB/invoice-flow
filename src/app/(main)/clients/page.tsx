import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
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

export default function ClientsPage() {
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
            <Button variant="ghost" size="sm" asChild>
              <Link href="/factures">Factures</Link>
            </Button>
            <Button variant="default" size="sm" asChild>
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
            <h1 className="text-2xl font-bold tracking-tight">Clients</h1>
            <p className="text-muted-foreground">
              Gérez votre base de clients et leurs informations
            </p>
          </div>
          <Button asChild>
            <Link href="/clients/nouveau">
              <Plus className="mr-2 h-4 w-4" />
              Nouveau client
            </Link>
          </Button>
        </div>
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
            <Input
              type="search"
              placeholder="Rechercher un client..."
              className="pl-8"
            />
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="tous">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tous">Tous les types</SelectItem>
                <SelectItem value="entreprise">Entreprise</SelectItem>
                <SelectItem value="particulier">Particulier</SelectItem>
                <SelectItem value="association">Association</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="nom">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nom">Nom (A-Z)</SelectItem>
                <SelectItem value="nom-desc">Nom (Z-A)</SelectItem>
                <SelectItem value="recent">Plus récent</SelectItem>
                <SelectItem value="ancien">Plus ancien</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-6 rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Téléphone</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Devis</TableHead>
                <TableHead>Factures</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "1",
                  nom: "Entreprise ABC",
                  email: "contact@entrepriseabc.com",
                  telephone: "01 23 45 67 89",
                  type: "Entreprise",
                  devis: 3,
                  factures: 5,
                },
                {
                  id: "2",
                  nom: "Société XYZ",
                  email: "info@societe-xyz.com",
                  telephone: "01 98 76 54 32",
                  type: "Entreprise",
                  devis: 2,
                  factures: 4,
                },
                {
                  id: "3",
                  nom: "Jean Dupont",
                  email: "jean.dupont@email.com",
                  telephone: "06 12 34 56 78",
                  type: "Particulier",
                  devis: 1,
                  factures: 2,
                },
                {
                  id: "4",
                  nom: "Entreprise 123",
                  email: "contact@entreprise123.fr",
                  telephone: "01 23 45 67 89",
                  type: "Entreprise",
                  devis: 4,
                  factures: 3,
                },
                {
                  id: "5",
                  nom: "Association DEF",
                  email: "info@association-def.org",
                  telephone: "01 23 45 67 89",
                  type: "Association",
                  devis: 2,
                  factures: 1,
                },
              ].map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">{client.nom}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.telephone}</TableCell>
                  <TableCell>{client.type}</TableCell>
                  <TableCell>{client.devis}</TableCell>
                  <TableCell>{client.factures}</TableCell>
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
                            href={`/clients/${client.id}`}
                            className="flex w-full items-center"
                          >
                            Voir le détail
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            href={`/clients/${client.id}/modifier`}
                            className="flex w-full items-center"
                          >
                            Modifier
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link
                            href={`/devis/nouveau?client=${client.id}`}
                            className="flex w-full items-center"
                          >
                            Créer un devis
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            href={`/factures/nouvelle?client=${client.id}`}
                            className="flex w-full items-center"
                          >
                            Créer une facture
                          </Link>
                        </DropdownMenuItem>
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
            Affichage de 1 à 5 sur 25 entrées
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
