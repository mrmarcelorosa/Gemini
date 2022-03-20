package com.example.Gemini.exceptions;

public class TurmaException extends RuntimeException {

	private static final long serialVersionUID = 5006645927035367874L;

	public TurmaException(String errorMessage, Throwable err) {
		super(errorMessage, err);
	}
}