export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold text-primary">
              Hrisikesh<span className="text-destructive">Ghosh</span>
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">© {2026} Hrisikesh Ghosh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
