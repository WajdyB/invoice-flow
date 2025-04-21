import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  FileText,
  Home,
  Settings,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
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
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Tableau de bord
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/devis">
                <FileText className="mr-2 h-4 w-4" />
                Devis
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/factures">
                <FileText className="mr-2 h-4 w-4" />
                Factures
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/clients">
                <Users className="mr-2 h-4 w-4" />
                Clients
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/parametres">
                <Settings className="mr-2 h-4 w-4" />
                Paramètres
              </Link>
            </Button>
          </nav>
        </div>
      </div>
      <main className="flex-1 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Tableau de bord</h1>
          <div className="flex items-center gap-2">
            <Button asChild>
              <Link href="/devis/nouveau">
                Nouveau devis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild>
              <Link href="/factures/nouvelle">
                Nouvelle facture
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Devis en attente
              </CardTitle>
              <FileText className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-muted-foreground text-xs">
                +2 depuis le mois dernier
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Factures impayées
              </CardTitle>
              <FileText className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-muted-foreground text-xs">
                -3 depuis le mois dernier
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Chiffre d'affaires
              </CardTitle>
              <BarChart3 className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24 560 €</div>
              <p className="text-muted-foreground text-xs">
                +12% depuis le mois dernier
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Clients actifs
              </CardTitle>
              <Users className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-muted-foreground text-xs">
                +4 depuis le mois dernier
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Devis récents</CardTitle>
              <CardDescription>Vos derniers devis créés</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[
                  {
                    id: "DEV-2023-042",
                    client: "Entreprise ABC",
                    montant: "1 250,00 €",
                    date: "15/04/2023",
                  },
                  {
                    id: "DEV-2023-041",
                    client: "Société XYZ",
                    montant: "3 780,00 €",
                    date: "12/04/2023",
                  },
                  {
                    id: "DEV-2023-040",
                    client: "Client Particulier",
                    montant: "450,00 €",
                    date: "10/04/2023",
                  },
                  {
                    id: "DEV-2023-039",
                    client: "Entreprise 123",
                    montant: "2 100,00 €",
                    date: "05/04/2023",
                  },
                ].map((devis) => (
                  <div
                    key={devis.id}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div>
                      <p className="font-medium">{devis.id}</p>
                      <p className="text-muted-foreground text-sm">
                        {devis.client}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{devis.montant}</p>
                      <p className="text-muted-foreground text-sm">
                        {devis.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/devis">Voir tous les devis</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Factures récentes</CardTitle>
              <CardDescription>Vos dernières factures émises</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[
                  {
                    id: "FAC-2023-038",
                    client: "Entreprise ABC",
                    montant: "1 250,00 €",
                    date: "15/04/2023",
                    status: "Payée",
                  },
                  {
                    id: "FAC-2023-037",
                    client: "Société XYZ",
                    montant: "3 780,00 €",
                    date: "12/04/2023",
                    status: "En attente",
                  },
                  {
                    id: "FAC-2023-036",
                    client: "Client Particulier",
                    montant: "450,00 €",
                    date: "10/04/2023",
                    status: "Payée",
                  },
                  {
                    id: "FAC-2023-035",
                    client: "Entreprise 123",
                    montant: "2 100,00 €",
                    date: "05/04/2023",
                    status: "En retard",
                  },
                ].map((facture) => (
                  <div
                    key={facture.id}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div>
                      <p className="font-medium">{facture.id}</p>
                      <p className="text-muted-foreground text-sm">
                        {facture.client}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{facture.montant}</p>
                      <div className="flex items-center justify-end gap-2">
                        <p className="text-muted-foreground text-sm">
                          {facture.date}
                        </p>
                        <span
                          className={`inline-flex h-2 w-2 rounded-full ${
                            facture.status === "Payée"
                              ? "bg-green-500"
                              : facture.status === "En attente"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/factures">Voir toutes les factures</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
