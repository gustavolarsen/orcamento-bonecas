import { Add, ArrowBack, ArrowForward, AutoAwesome, Check, CheckCircle, ContentCopy, Delete, Error, FavoriteBorder, Instagram, Launch, LocalFlorist, Send, WhatsApp } from "@mui/icons-material";
import { Alert, Avatar, Box, Button, Card, Chip, Container, IconButton, InputAdornment, LinearProgress, Stack, TextField, Typography } from "@mui/material";
import { services } from "../data/services";
import { stepNames } from "../data/quoteSteps";
import { useQuoteForm } from "../hooks/useQuoteForm";
import { ChoiceCard } from "../shared/ChoiceCard";
import { OptionToggles } from "../shared/OptionToggles";
import { ReviewCard } from "../shared/ReviewCard";
import { SectionTitle } from "../shared/SectionTitle";
import { UploadCard } from "../shared/UploadCard";
import { palette } from "../theme/palette";
import { ClientHeader } from "./ClientHeader";

export function QuoteFlow({ onAdmin }: { onAdmin: () => void }) {
  const {
    step,
    form,
    errors,
    submitted,
    copied,
    update,
    next,
    back,
    goToStep,
    toggle,
    copySummary,
    reset,
    submit,
  } = useQuoteForm();

  if (submitted) {
    return (
      <Box
        minHeight="100vh"
        display="grid"
        sx={{
          placeItems: "center",
          p: 2,
          background:
            "radial-gradient(circle at top,#fff59a 0,transparent 48%)",
        }}
      >
        <Card
          sx={{
            maxWidth: 540,
            width: "100%",
            p: { xs: 3, sm: 5 },
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: 76,
              height: 76,
              borderRadius: "50%",
              bgcolor: "#e8f0e8",
              color: palette.sage,
              display: "grid",
              placeItems: "center",
              mx: "auto",
              mb: 2,
            }}
          >
            <CheckCircle sx={{ fontSize: 42 }} />
          </Box>
          <Typography variant="h3" fontSize={40}>
            Pedido recebido com sucesso!
          </Typography>
          <Typography color="text.secondary" mt={1.5}>
            Agora a artista vai analisar cada detalhe com carinho e entrar em
            contato pelo WhatsApp.
          </Typography>
          <Box sx={{ bgcolor: "#f8f2ef", borderRadius: 3, p: 2, my: 3 }}>
            <Typography variant="caption" color="text.secondary">
              NÚMERO DO PEDIDO
            </Typography>
            <Typography variant="h5" fontWeight={800}>
              #IVI-2847
            </Typography>
          </Box>
          <Stack spacing={1.2}>
            <Button
              variant="contained"
              startIcon={copied ?<Check /> : <ContentCopy />}
              onClick={copySummary}
            >
              {copied ?"Resumo copiado" : "Copiar resumo"}
            </Button>
            <Button variant="outlined" startIcon={<WhatsApp />}>
              Chamar no WhatsApp
            </Button>
            <Button
              color="inherit"
              onClick={reset}
            >
              Fazer outro pedido
            </Button>
          </Stack>
          <Button
            size="small"
            onClick={onAdmin}
            sx={{ mt: 3, color: "text.secondary" }}
          >
            Ver demonstração da área da artista
          </Button>
        </Card>
      </Box>
    );
  }

  const screens = [
    <Box
      key="welcome"
      sx={{
        minHeight: { xs: "calc(100vh - 76px)", md: "calc(100vh - 84px)" },
        display: "grid",
        alignItems: "center",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.02fr .98fr" },
            gap: { xs: 4, md: 8 },
            alignItems: "center",
          }}
        >
          <Box>
            <Chip
              icon={<LocalFlorist />}
              label="Seu projeto começa aqui"
              sx={{ bgcolor: palette.yellow, color: palette.ink, mb: 2 }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: 52, sm: 66, md: 76 },
                lineHeight: 0.94,
                maxWidth: 650,
              }}
            >
              Sua ideia, feita com{" "}
              <Box component="span" color="primary.main" fontStyle="italic">
                cor e carinho.
              </Box>
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                fontSize: { xs: 16, sm: 18 },
                lineHeight: 1.7,
                my: 3,
                maxWidth: 580,
              }}
            >
              Monte seu pedido de customização passo a passo com a Ivi. Você
              escolhe os detalhes e referências, e a By Ivi transforma tudo em
              um orçamento claro e cheio de personalidade.
            </Typography>
            <Button
              size="large"
              variant="contained"
              endIcon={<ArrowForward />}
              onClick={next}
            >
              Começar orçamento
            </Button>
            <Stack direction="row" spacing={3} mt={3} color="text.secondary">
              <Typography variant="caption">● Cerca de 5 minutos</Typography>
              <Typography variant="caption">● Sem compromisso</Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              position: "relative",
              order: { xs: -1, md: 1 },
              maxWidth: { xs: 340, md: 500 },
              mx: "auto",
            }}
          >
            <Box
              component="img"
              src="/atelier-doll.png"
              alt="Boneca artística de cabelos ruivos"
              sx={{
                width: "100%",
                display: "block",
                borderRadius: "28px",
                maxHeight: { xs: 390, md: 650 },
                objectFit: "cover",
                objectPosition: "center 62%",
                boxShadow: "0 25px 70px rgba(233,0,70,.14)",
              }}
            />
            <Card
              sx={{
                position: "absolute",
                bottom: 18,
                left: -20,
                p: 1.5,
                display: "flex",
                gap: 1.2,
                alignItems: "center",
              }}
            >
              <Avatar sx={{ bgcolor: palette.yellow, color: palette.wine }}>
                <AutoAwesome />
              </Avatar>
              <Box>
                <Typography fontWeight={800} variant="body2">
                  Feito à mão
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Cada detalhe é único
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>,

    <Box key="data">
      <SectionTitle
        eyebrow="Etapa 1 de 9"
        title="Primeiro, vamos nos conhecer"
        text="Usaremos estes dados apenas para conversar sobre o seu orçamento."
      />
      <Stack spacing={2.2}>
        <TextField
          label="Seu nome *"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          label="E-mail *"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="WhatsApp com DDD *"
          placeholder="(11) 99999-9999"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          error={!!errors.phone}
          helperText={errors.phone}
        />
        <TextField
          label="Seu Instagram (opcional)"
          placeholder="@seuusuario"
          value={form.instagram}
          onChange={(e) => update("instagram", e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Instagram />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Box>,

    <Box key="type">
      <SectionTitle
        eyebrow="Etapa 2 de 9"
        title="Qual o tipo da sua boneca?"
        text="Se não tiver certeza, tudo bem. A foto que você enviar depois também vai ajudar na identificação."
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3,1fr)" },
          gap: 1.5,
        }}
      >
        {[
          "TBL",
          "NBL",
          "Blythe original",
          "BJD",
          "Boneca falsa",
          "Não sei identificar",
          "Outro",
        ].map((item) => (
          <ChoiceCard
            key={item}
            title={item}
            selected={form.dollType === item}
            onClick={() => update("dollType", item)}
            icon={<FavoriteBorder />}
          />
        ))}
      </Box>
      {errors.dollType && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {errors.dollType}
        </Alert>
      )}
      {["Outro", "Não sei identificar"].includes(form.dollType) && (
        <TextField
          fullWidth
          multiline
          rows={3}
          sx={{ mt: 2 }}
          label="Conte o que você sabe sobre a boneca"
          value={form.dollOther}
          onChange={(e) => update("dollOther", e.target.value)}
        />
      )}
    </Box>,

    <Box key="state">
      <SectionTitle
        eyebrow="Etapa 3 de 9"
        title="Como ela está hoje?"
        text="Isso ajuda a artista a entender o ponto de partida e os cuidados necessários."
      />
      <Typography fontWeight={700} mb={1.5}>
        A sua boneca já é customizada?
      </Typography>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1.5 }}
      >
        {["Sim", "Não", "Não sei"].map((item) => (
          <ChoiceCard
            key={item}
            title={item}
            selected={form.customized === item}
            onClick={() => update("customized", item)}
          />
        ))}
      </Box>
      {errors.customized && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {errors.customized}
        </Alert>
      )}
      {form.customized === "Sim" && (
        <Box mt={4}>
          <Typography fontWeight={700} mb={1.5}>
            Marque tudo que ela já tem
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 1.2,
            }}
          >
            {[
              "Carving",
              "Maquiagem",
              "Troca de olhos",
              "Dano ou problema visível",
            ].map((item) => (
              <ChoiceCard
                key={item}
                title={item}
                selected={form.currentDetails.includes(item)}
                onClick={() => toggle("currentDetails", item)}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>,

    <Box key="services">
      <SectionTitle
        eyebrow="Etapa 4 de 9"
        title="O que você gostaria de transformar?"
        text="Pode escolher quantos serviços quiser. As explicações ajudam mesmo quem está conhecendo este universo agora."
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 1.4,
        }}
      >
        {services.map(([title, description]) => (
          <ChoiceCard
            key={title}
            title={title}
            description={description}
            selected={form.services.includes(title)}
            onClick={() => toggle("services", title)}
            icon={<AutoAwesome />}
          />
        ))}
      </Box>
      {errors.services && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {errors.services}
        </Alert>
      )}
    </Box>,

    <Box key="preferences">
      <SectionTitle
        eyebrow="Etapa 5 de 9"
        title="Agora, os detalhes especiais"
        text={
          form.services.some((x) =>
            ["Carving", "Olhos", "Backplate"].includes(x),
          )
            ?"Só perguntamos o que faz sentido para os serviços que você escolheu."
            : "Suas escolhas não precisam de perguntas adicionais. Você já pode seguir em frente."
        }
      />
      <Stack spacing={4}>
        {form.services.includes("Carving") && (
          <Box>
            <Typography variant="h6" fontWeight={800} mb={1.5}>
              Como você imagina a boquinha?
            </Typography>
            <OptionToggles
              value={form.carving}
              onChange={(v) => update("carving", v)}
              options={[
                "Simples e delicada",
                "Realista",
                "Com dentinhos",
                "Boca entreaberta",
                "Não sei, quero sugestão da artista",
              ]}
            />
          </Box>
        )}
        {form.services.includes("Olhos") && (
          <Box>
            <Typography variant="h6" fontWeight={800} mb={1.5}>
              Que estilo de olhos você deseja?
            </Typography>
            <OptionToggles
              value={form.eyes}
              onChange={(v) => update("eyes", v)}
              options={[
                "Vermelho",
                "Azul",
                "Laranja",
                "Natural",
                "Preto",
                "Rosa",
                "Outro",
                "Não sei, quero sugestão",
              ]}
            />
          </Box>
        )}
        {form.services.includes("Backplate") && (
          <Box>
            <Typography variant="h6" fontWeight={800} mb={1.5}>
              Como deve ser o backplate?
            </Typography>
            <OptionToggles
              value={form.backplate}
              onChange={(v) => update("backplate", v)}
              options={[
                "Pintura personalizada",
                "Algo simples",
                "Não sei, quero sugestão",
                "Não quero pintura",
              ]}
            />
          </Box>
        )}
        {!form.services.some((x) =>
          ["Carving", "Olhos", "Backplate"].includes(x),
        ) && (
          <Card sx={{ p: 3, textAlign: "center", bgcolor: "#fff8c9" }}>
            <AutoAwesome color="secondary" />
            <Typography fontWeight={700} mt={1}>
              Tudo certo por aqui.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Vamos escolher as referências visuais?
            </Typography>
          </Card>
        )}
      </Stack>
    </Box>,

    <Box key="refs">
      <SectionTitle
        eyebrow="Etapa 6 de 9"
        title="Escolha referências no nosso Instagram"
        text="Para respeitar o trabalho de outros artistas, usamos apenas postagens do nosso próprio portfólio."
      />
      <Card sx={{ p: 2.5, bgcolor: "#fff4f7", mb: 3 }}>
        <Stack direction="row" gap={2} alignItems="flex-start">
          <Avatar sx={{ bgcolor: palette.wine }}>
            <Instagram />
          </Avatar>
          <Box>
            <Typography fontWeight={800}>Como copiar o link</Typography>
            <Typography variant="body2" color="text.secondary" mt={0.5}>
              Abra uma postagem do portfólio, toque no botão de compartilhar e
              escolha “Copiar link”. Depois, volte aqui e cole abaixo.
            </Typography>
            <Button
              href="https://www.instagram.com/ivi.dias.weber"
              target="_blank"
              size="small"
              endIcon={<Launch />}
              sx={{ mt: 1, px: 0 }}
            >
              Abrir portfólio no Instagram
            </Button>
          </Box>
        </Stack>
      </Card>
      <Alert
        icon={<Error />}
        severity="info"
        sx={{ mb: 3, bgcolor: "#fffbea" }}
      >
        Não envie prints ou imagens de outros artistas. Use apenas links de
        postagens do nosso portfólio.
      </Alert>
      <Stack spacing={2}>
        {form.refs.map((ref, i) => (
          <Stack key={i} direction="row" gap={1} alignItems="flex-start">
            <TextField
              fullWidth
              label={`Link de referência ${i + 1} ${i === 0 ?"(opcional)" : ""}`}
              value={ref}
              onChange={(e) => {
                const refs = [...form.refs];
                refs[i] = e.target.value;
                update("refs", refs);
              }}
              error={!!errors[`ref${i}`]}
              helperText={errors[`ref${i}`]}
              placeholder="https://www.instagram.com/p/..."
            />
            {i > 0 && (
              <IconButton
                onClick={() =>
                  update(
                    "refs",
                    form.refs.filter((_, index) => index !== i),
                  )
                }
              >
                <Delete />
              </IconButton>
            )}
          </Stack>
        ))}
        {form.refs.length < 3 && (
          <Button
            variant="outlined"
            startIcon={<Add />}
            onClick={() => update("refs", [...form.refs, ""])}
            sx={{ alignSelf: "flex-start" }}
          >
            Adicionar outro link
          </Button>
        )}
        <TextField
          multiline
          rows={4}
          label="O que você gostou nessas referências?"
          placeholder="Ex.: Gostei da boca delicada, das sardas suaves e dos tons rosados."
          value={form.refDescription}
          onChange={(e) => update("refDescription", e.target.value)}
        />
      </Stack>
    </Box>,

    <Box key="photos">
      <SectionTitle
        eyebrow="Etapa 7 de 9"
        title="Envie fotos da sua boneca atual"
        text="Essas fotos ajudam a artista a avaliar o estado da boneca e calcular o orçamento."
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3,1fr)" },
          gap: 1.5,
        }}
      >
        {[
          ["front", "Rosto de frente", "Obrigatória"],
          ["side", "Lateral do rosto", "Opcional"],
          ["body", "Cabelo e corpo", "Opcional"],
        ].map(([key, label, required]) => (
          <UploadCard
            key={key}
            label={label}
            required={required}
            preview={form.photos[key]}
            onChange={(value) =>
              update("photos", { ...form.photos, [key]: value })
            }
            error={key === "front" ?errors.front : undefined}
          />
        ))}
      </Box>
      <Card sx={{ mt: 3, p: 2.5, boxShadow: "none", bgcolor: "#fffbea" }}>
        <Typography fontWeight={800} mb={1}>
          Para uma boa avaliação
        </Typography>
        <Stack direction="row" useFlexGap flexWrap="wrap" gap={1}>
          {[
            "Boa iluminação",
            "Sem filtro",
            "Rosto inteiro visível",
            "Fundo simples",
          ].map((x) => (
            <Chip key={x} icon={<Check />} label={x} />
          ))}
        </Stack>
        <Typography
          variant="caption"
          color="text.secondary"
          display="block"
          mt={2}
        >
          As imagens serão comprimidas automaticamente antes do envio.
        </Typography>
      </Card>
    </Box>,

    <Box key="notes">
      <SectionTitle
        eyebrow="Etapa 8 de 9"
        title="Qual é o clima da sua boneca?"
        text="Conte com suas palavras. Não precisa usar termos técnicos — queremos entender a sensação que você imagina."
      />
      <Typography fontWeight={700} mb={1.5}>
        Toque para adicionar uma ideia
      </Typography>
      <Stack direction="row" useFlexGap flexWrap="wrap" gap={1} mb={2}>
        {[
          "Quero algo delicado",
          "Quero algo mais realista",
          "Quero algo colorido/fantasia",
          "Quero algo parecido com as referências",
          "Quero sugestão da artista",
        ].map((x) => (
          <Chip
            key={x}
            label={x}
            clickable
            onClick={() =>
              update("notes", form.notes ?`${form.notes}\n${x}.` : `${x}.`)
            }
            sx={{ "&:hover": { bgcolor: palette.blush } }}
          />
        ))}
      </Stack>
      <TextField
        fullWidth
        multiline
        minRows={7}
        label="Conte mais detalhes sobre o que você imagina"
        value={form.notes}
        onChange={(e) => update("notes", e.target.value)}
        placeholder="Ex.: Quero uma expressão doce, com sardinhas bem suaves..."
      />
    </Box>,

    <Box key="review">
      <SectionTitle
        eyebrow="Etapa 9 de 9"
        title="Tudo pronto para enviar"
        text="Revise o pedido. Se quiser mudar algo, toque em editar e volte à etapa correspondente."
      />
      <Stack spacing={1.5}>
        <ReviewCard
          title="Seus dados"
          onEdit={() => goToStep(1)}
          lines={[form.name, form.email, form.phone, form.instagram].filter(
            Boolean,
          )}
        />
        <ReviewCard
          title="Sua boneca"
          onEdit={() => goToStep(2)}
          lines={[
            form.dollType,
            form.dollOther,
            `Customizada: ${form.customized}`,
            ...form.currentDetails,
          ].filter(Boolean)}
        />
        <ReviewCard
          title="Serviços e preferências"
          onEdit={() => goToStep(4)}
          chips={form.services}
          lines={
            [
              form.carving && `Boca: ${form.carving}`,
              form.eyes && `Olhos: ${form.eyes}`,
              form.backplate && `Backplate: ${form.backplate}`,
            ].filter(Boolean) as string[]
          }
        />
        <ReviewCard
          title="Referências do Instagram"
          onEdit={() => goToStep(6)}
          lines={[...form.refs.filter(Boolean), form.refDescription].filter(
            Boolean,
          )}
          empty="Nenhuma referência adicionada."
        />
        <ReviewCard
          title="Fotos da boneca"
          onEdit={() => goToStep(7)}
          chips={Object.keys(form.photos).map((x) =>
            x === "front"
              ?"Frente"
              : x === "side"
                ?"Lateral"
                : "Cabelo/corpo",
          )}
        />
        <ReviewCard
          title="Observações finais"
          onEdit={() => goToStep(8)}
          lines={[form.notes].filter(Boolean)}
          empty="Nenhuma observação adicionada."
        />
      </Stack>
      <Alert severity="success" sx={{ mt: 3 }}>
        Seu pedido será enviado para análise. O orçamento só é confirmado depois
        da conversa com a artista.
      </Alert>
    </Box>,
  ];

  return (
    <Box sx={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      <ClientHeader onAdmin={onAdmin} />
      {step > 0 && (
        <Box
          sx={{
            position: "sticky",
            top: 68,
            zIndex: 5,
            bgcolor: "rgba(250,247,243,.94)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid #eee5e0",
          }}
        >
          <Container maxWidth="md" sx={{ py: 1.2 }}>
            <Stack direction="row" justifyContent="space-between" mb={0.7}>
              <Typography variant="caption" fontWeight={800}>
                {stepNames[step]}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {step} de 9
              </Typography>
            </Stack>
            <LinearProgress
              variant="determinate"
              value={(step / 9) * 100}
              sx={{
                height: 5,
                borderRadius: 4,
                bgcolor: "#f8d9e2",
                "& .MuiLinearProgress-bar": { borderRadius: 4 },
              }}
            />
          </Container>
        </Box>
      )}
      {step === 0 ?(
        screens[0]
      ) : (
        <Container
          maxWidth="md"
          sx={{
            flex: 1,
            width: "100%",
            pt: { xs: 4, sm: 7 },
            pb: { xs: 4, sm: 7 },
          }}
        >
          {screens[step]}
        </Container>
      )}
      {step > 0 && (
        <Box
          sx={{
            position: "sticky",
            bottom: 0,
            zIndex: 10,
            bgcolor: "rgba(255,254,252,.96)",
            borderTop: "1px solid #eadfda",
            backdropFilter: "blur(10px)",
            pb: "env(safe-area-inset-bottom)",
          }}
        >
          <Container maxWidth="md">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              py={{ xs: 2, sm: 1.5 }}
            >
              <Button color="inherit" startIcon={<ArrowBack />} onClick={back}>
                Voltar
              </Button>
              {step < 9 ?(
                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  onClick={next}
                >
                  Continuar
                </Button>
              ) : (
                <Button
                  variant="contained"
                  endIcon={<Send />}
                  onClick={() => submit()}
                >
                  Enviar pedido
                </Button>
              )}
            </Stack>
          </Container>
        </Box>
      )}
    </Box>
  );
}





