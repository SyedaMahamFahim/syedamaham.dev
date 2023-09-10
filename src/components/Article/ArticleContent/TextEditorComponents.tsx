import React, { ReactNode } from 'react';
import Link from "next/link";

interface TextEditorProps {
    children: ReactNode;
    value?: any
}

export const P: React.FC<TextEditorProps> = ({ children }) =>  <p className="my-8 text-lg">{children}</p>

export const H1: React.FC<TextEditorProps> = ({ children }) => <h1 className="font-semibold text-4xl my-8 leading-tight">{children}</h1>

export const H2: React.FC<TextEditorProps> = ({ children }) => <h2 className="font-semibold text-3xl my-8 leading-tight">{children}</h2>

export const H3: React.FC<TextEditorProps> = ({ children }) => <h3 className="font-semibold text-2xl my-8 leading-tight">{children}</h3>

export const H4: React.FC<TextEditorProps> = ({ children }) => <h4 className="font-semibold text-1xl my-8 leading-tight">{children}</h4>

export const H5: React.FC<TextEditorProps> = ({ children }) => <h5 className="font-semibold text-lg my-8 leading-tight">{children}</h5>

export const H6: React.FC<TextEditorProps> = ({ children }) => <h6 className="font-semibold text-base my-8 leading-tight">{children}</h6>

export const UL: React.FC<TextEditorProps> = ({ children }) => <ul className="my-4 pl-7 list-disc">{children}</ul>

export const OL: React.FC<TextEditorProps> = ({ children }) => <ol className="my-4 pl-7">{children}</ol>

export const ListLiNumber: React.FC<TextEditorProps> = ({ children }) => <li className="pl-1 my-2">{children}</li>

export const ListLiBullet: React.FC<TextEditorProps> = ({ children }) => <li className="pl-1 my-1.5 list-decimal">{children}</li>

export const LinkTag: React.FC<TextEditorProps> = ({ children, value }) => {
    const rel = !value?.href?.startsWith('/') ? 'noreferrer noopener' : undefined
    const targ = !value?.href?.startsWith('/') ? '_blank' : undefined
    return (
      !value?.href?.startsWith('/') ?
        <a href={value.href} rel={rel} target={targ} aria-label={`${children}`}className="text-appPurple-100 dark:text-appRed-100 text-decoration-underline">
          {children}
        </a> : <Link href={value.href} className="text-appPurple-100 dark:text-appRed-100 text-decoration-underline">{children}</Link>
    )
}

