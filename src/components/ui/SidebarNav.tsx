"use client"
import { FC, useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/ui/DropdownMenu"
import Icons from "@/components/Icons"
import { Button } from "@/ui/Button"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { toast } from "@/ui/toast"

const SidebarNav: FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    const { data: session } = useSession()

    const signUserOut = async () => {
        try {
            await signOut()
        } catch (error) {
            toast({
                title: "Error signing out",
                message: "Please try again later.",
                type: "error",
            })
        }
    }

    return (
        <div className="flex items-center transition delay-150 ease-in">
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger
                    asChild
                    onClick={() => {
                        setOpen((prev) => !prev)
                    }}
                >
                    <Button variant="outline" size="sm">
                        <Icons.AlignJustify className="hover:text-slate-900/75" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72 absolute -top-16 -right-12 h-screen flex flex-col p-4">
                    <DropdownMenuGroup
                        onClick={() => setOpen(false)}
                        className="mt-10"
                    >
                        <DropdownMenuItem asChild>
                            <div className="flex justify-between items-center">
                                <Button size="sm">
                                    <Icons.ChevronRight size={20} />
                                </Button>
                                <Link href="/">Recommendations API</Link>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="/documentation">Documentation</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="/recommendations">Recommendations</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {session ? (
                            <>
                                <DropdownMenuItem>
                                    <Link href="/dashboard">Dashboard</Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={signUserOut}>
                                    Logout
                                </DropdownMenuItem>
                            </>
                        ) : (
                            <DropdownMenuItem>
                                <Link href="/login">Sign In</Link>
                            </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="https://github.com/Soronzonboldbill/">
                                My Github
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default SidebarNav
