import React from "react";
import { render, screen } from "@testing-library/react";
import Message from "../message";

describe('Message test', () => {
    it('show author and text', () => {
        render(<Message author='author' text='test' />);

        const testText = screen.getByText('author: test');
        expect(testText).toBeDefined();
    });
});

