

import type { Meta, StoryObj } from "@storybook/react";
import RenderCode, { SyntaxHighlightStyle, supportedLanguages, supportedStyles } from "./render-code";
import { DESIGN_PATTERNS } from "./examples";

const meta = {
	title: "Ejemplos/Design Patters",
	component: RenderCode,
	tags: ["autodocs"],
	argTypes: {
		code: { control: false },
		language: {
			defaultValue: "typescript",	
			control: {type: "select"},		
			options: supportedLanguages, // Lista de lenguajes
		},
		styleName: {
			defaultValue: SyntaxHighlightStyle.Darcula,	
			control: {type: "select"},		
			options: supportedStyles, // Lista de lenguajes
		},
	},
} satisfies Meta<typeof RenderCode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FactoryMethod: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Example of Factory Method",
			},
		},
	},
	args: {
		code: DESIGN_PATTERNS.FACTORY_METHOD,
		language: "typescript",
		styleName: SyntaxHighlightStyle.Darcula
	},
	
};

export const AbstractMethod: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Example of Abstract Method",
			},
		},
	},
	args: {
		code: DESIGN_PATTERNS.ABSTRACT_METHOD,
		language: "typescript",
		styleName: SyntaxHighlightStyle.Darcula
	},
};

export const Builder: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Example of Builder",
			},
		},
	},
	args: {
		code: DESIGN_PATTERNS.BUILDER,
		language: "typescript",
		styleName: SyntaxHighlightStyle.Darcula
	},
};
