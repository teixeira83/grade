import React from "react";

interface IAccordion {
    title: string,
    isOpen: boolean,
    onClick: () => void
}

export { IAccordion };