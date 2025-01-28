"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useIntl } from "react-intl"

const languages = [
  { value: "en", label: "English" },
  { value: "sq", label: "Shqip" },
  { value: "de", label: "Deutsch" },
  { value: "fr", label: "Français" },
]

export function LanguageSelector({ locale, setLocale }: { locale: string; setLocale: (locale: string) => void }) {
  const [open, setOpen] = React.useState(false)
  const intl = useIntl()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-[120px] justify-left text-white bg-transparent  hover:bg-transparent  hover:text-secondary-purple"
        >
          {locale ? languages.find((language) => language.value === locale)?.label : "Select language"}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[140px] p-0">
        <Command>
          {/* <CommandInput
            placeholder={intl.formatMessage({ id: "navbar.searchLanguage", defaultMessage: "Search language..." })}
          /> */}
          <CommandList>
            <CommandEmpty>
              {intl.formatMessage({ id: "navbar.noLanguageFound", defaultMessage: "No language found." })}
            </CommandEmpty>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.value}
                  onSelect={() => {
                    setLocale(language.value)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", locale === language.value ? "opacity-100" : "opacity-0")} />
                  {language.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

