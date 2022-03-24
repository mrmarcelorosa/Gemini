package com.example.Gemini.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Gemini.DTO.QuestaoDTO;
import com.example.Gemini.model.Questao;
import com.example.Gemini.model.Resposta;
import com.example.Gemini.repository.QuestaoRepository;

@Service
public class QuestaoService {

    @Autowired
    QuestaoRepository repository;
    
    @Autowired
    RespostaService respostaService;
    

    public Questao save(Questao questao){
            return repository.save(questao);
    }

    public List<Questao> getList(){
        return repository.findAll();
    }

    public List<Questao> getByIdQuest(Integer id){
        return repository.findByIdQuest(id);
    }

    public void delete(Questao q){
        repository.delete(q);
    }
    
    private List<Questao> getListaQuestoesByIdQuestParaRelatorio(Long id){
        return repository.findByIdQuestionarioAdequadasRelatorio(id);
    }

    public List<QuestaoDTO> getListQuestaoDTOByIdQuestionario(Long id) {
        List<Questao> listaQuestoes = this.getListaQuestoesByIdQuestParaRelatorio(id);
        List<QuestaoDTO> listaQuestoesDTO = new ArrayList<QuestaoDTO>();

        listaQuestoes.stream().forEach(
            (Questao questao) -> {
                QuestaoDTO questaoDTO = this.getQuestaoDTO(questao);
                listaQuestoesDTO.add(questaoDTO);

            }
        );

        return listaQuestoesDTO;
    }

    private QuestaoDTO getQuestaoDTO(Questao questao) {
        QuestaoDTO questaoDTO = new QuestaoDTO();

        questaoDTO.setId(questao.getId());
        questaoDTO.setIdquest(questao.getIdquest());
        questaoDTO.setName(questao.getName());
        questaoDTO.setAlternativas(questao.getAlternativas());
        questaoDTO.setResposta(questao.getResposta());
        questaoDTO.setTipo_alternativa(questao.getTipo_alternativa());

        List<Resposta> listaRespostas = this.respostaService.getListaRespostasByIdQuestao(questao.getId());
        questaoDTO.setListaRespostasQuestao(listaRespostas);

        return questaoDTO;

    }
}
