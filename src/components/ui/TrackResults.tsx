"use client"
import { FC, useEffect, useState } from "react"
import { createTheme, ThemeProvider } from "@mui/material"
import { DataGrid, GridColDef, GridColumnHeaderParams } from "@mui/x-data-grid"
import { useTheme } from "next-themes"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/ui/Button"

const columnsTemplate: GridColDef[] = [
    {
        field: "col1",
        headerName: "Song Name",
        width: 250,
        renderHeader(params) {
            return (
                <strong className="font-semibold">
                    {params.colDef.headerName}
                </strong>
            )
        },
    },
    {
        field: "col2",
        headerName: "Artist Name",
        width: 250,
    },
    {
        field: "col3",
        headerName: "Album Name",
        width: 250,
    },
    {
        field: "col4",
        headerName: "Link",
        width: 150,
        renderCell(params) {
            return (
                <a href={params.row.col4}>
                    <Button
                        className={cn(
                            buttonVariants({ variant: "subtle" }),
                            "dark:text-slate-400"
                        )}
                    >
                        Spotify Link
                    </Button>
                </a>
            )
        },
        cellClassName: "hover:outline-none",
    },
    {
        field: "col5",
        headerName: "Album Picture",
        width: 150,
        renderCell(params) {
            return (
                <Image
                    src={params.row.col5}
                    alt="album cover"
                    width={100}
                    height={100}
                    quality={100}
                />
            )
        },
    },
]

const columns = columnsTemplate.map((column) => {
    return {
        ...column,
        renderHeader(params: GridColumnHeaderParams<any, any, any>) {
            return (
                <strong className="font-semibold">
                    {params.colDef.headerName}
                </strong>
            )
        },
    }
})

interface TrackResultsProps {}

const TrackResults: FC<TrackResultsProps> = ({}) => {
    const [data, setData] = useState({} as any)
    useEffect(() => {
        const queryData: any = JSON.parse(window.name)
        setData(queryData.queryResults.tracks)
    }, [])

    const rows: any[] = []

    for (let i = 0; i < data.length; i++) {
        rows.push({
            id: data[i].id,
            col1: data[i].name,
            col2: data[i].artists[0].name,
            col3: data[i].album.name,
            col4: data[i].external_urls.spotify,
            col5: data[i].album.images[0].url,
        })
    }

    const { theme: applicationTheme } = useTheme()

    const darkTheme = createTheme({
        palette: {
            mode: applicationTheme === "light" ? "light" : "dark",
        },
    })

    // used to scroll back to the top of the page when page changes
    const handlePageChange = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <DataGrid
                style={{
                    backgroundColor:
                        applicationTheme === "light" ? "white" : "#152238",
                    fontSize: "1rem",
                    width: "100%",
                }}
                sx={{
                    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                        outline: "none !important",
                    },
                    overflowX: "auto",
                }}
                pageSizeOptions={[5, 10]}
                disableRowSelectionOnClick
                autoHeight
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                columns={columns}
                rows={rows}
                rowHeight={125}
                onPaginationModelChange={handlePageChange}
            />
        </ThemeProvider>
    )
}

export default TrackResults
