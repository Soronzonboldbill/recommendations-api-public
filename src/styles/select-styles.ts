// styles required to override the react-select default styles
export const colorStyles = {
    control: (styles: any) => ({
        ...styles, 
        height: "h-10", 
        borderRadius: "0.375rem", 
        border: "1px solid rgb(209 213 219)", 
        fontSize: "0.875rem", 
        lineHeight: "1rem", 
        focus: "outline-none", 
        color: "black"
    }), 
    placeholder: (styles: any) => ({
        ...styles, 
        color: "rgb(148 163 184)", 
        fontSize: "0.875rem", 
        lineHeight: "1rem" 
    }), 
    input: (styles: any) => ({
        ...styles, 
        fontSize: "0.875rem", 
        lineHeight: "1rem" 
    }), 
    multiValueRemove: (styles: any) => ({
        ...styles,
        color: "slate-300",
        cursor: "pointer",
        ":hover": {
            backgroundColor: "slate-300",
        },
    }),
    menuList: (styles: any) => ({
        ...styles,  
        color: "black" 
    })
}