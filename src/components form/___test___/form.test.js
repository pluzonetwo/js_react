import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import { Form } from "../form";

describe('form tests', () => {
    it('calls onSubmit with clicked', () => {
        const handleSubmit = jest.fn();
        const btn = screen.getByRole('button');

        render(<Form onSubmit={handleSubmit} />)

        fireEvent(
            btn,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );

        expect(handleSubmit).toHaveBeenCalledTimes(1);
        expect(handleSubmit).toHaveBeenCalledWith('');
    });
});