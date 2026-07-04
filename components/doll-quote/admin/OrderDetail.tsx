import { ArrowBack, Check, ContentCopy, ImageOutlined, Instagram, Launch, WhatsApp } from "@mui/icons-material";
import { Avatar, Box, Button, Card, Chip, Divider, FormControl, InputAdornment, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { statuses } from "../data/statuses";
import { useBudgetMessage } from "../hooks/useBudgetMessage";
import { DetailSection } from "../shared/DetailSection";
import { InfoGrid } from "../shared/InfoGrid";
import { palette } from "../theme/palette";
import type { Order } from "../types/order";

export function OrderDetail({ order, onBack }: { order: Order; onBack: () => void }) {
  const [status, setStatus] = useState(order.status);
  const [value, setValue] = useState("1.280,00");
  const [deadline, setDeadline] = useState("8 a 10 semanas");
  const [internal, setInternal] = useState(
    "Confirmar se a cliente aceita manter o scalp original. Avaliar pequeno risco próximo ao parafuso esquerdo.",
  );
  const [budgetNotes, setBudgetNotes] = useState(
    "O valor inclui materiais, finalização fosca e embalagem de proteção.",
  );
  const message = useBudgetMessage({ order, value, deadline, internal });
  const [editableMessage, setEditableMessage] = useState(message);
  const [copied, setCopied] = useState(false);
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1250, mx: "auto" }}>
      <Button
        startIcon={<ArrowBack />}
        color="inherit"
        onClick={onBack}
        sx={{ mb: 2 }}
      >
        Voltar para pedidos
      </Button>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={2}
        mb={3}
      >
        <Stack direction="row" gap={1.5} alignItems="center">
          <Avatar sx={{ bgcolor: order.color, width: 52, height: 52 }}>
            {order.initials}
          </Avatar>
          <Box>
            <Typography variant="h4">{order.name}</Typography>
            <Typography color="text.secondary">
              Pedido #{order.id} · recebido {order.date.toLowerCase()}
            </Typography>
          </Box>
        </Stack>
        <FormControl
          size="small"
          sx={{ minWidth: 220, bgcolor: "background.paper" }}
        >
          <Select value={status} onChange={(e) => setStatus(e.target.value)}>
            {statuses.map((x) => (
              <MenuItem key={x} value={x}>
                {x}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 380px" },
          gap: 2,
        }}
      >
        <Stack spacing={2}>
          <DetailSection title="Dados da cliente">
            <InfoGrid
              items={[
                ["E-mail", "marina.costa@email.com"],
                ["WhatsApp", "(11) 98765-4321"],
                ["Instagram", "@marinacosta"],
              ]}
            />
          </DetailSection>
          <DetailSection title="Boneca e estado atual">
            <InfoGrid
              items={[
                ["Tipo", order.doll],
                ["Já customizada", "Sim"],
                ["O que já tem", "Makeup e troca de olhos"],
                ["Dano visível", "Pequeno risco perto do parafuso"],
              ]}
            />
          </DetailSection>
          <DetailSection title="Serviços solicitados">
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {order.services.map((x) => (
                <Chip
                  key={x}
                  icon={<Check />}
                  label={x}
                  sx={{ bgcolor: "#f4e7e4", color: palette.wine }}
                />
              ))}
            </Stack>
            <Typography variant="body2" mt={2}>
              <b>Boquinha:</b> simples e delicada, levemente entreaberta.
            </Typography>
            <Typography variant="body2" mt={0.7}>
              <b>Estilo:</b> delicado, sardas suaves e tons rosados.
            </Typography>
          </DetailSection>
          <DetailSection title="Referências do Instagram">
            {[
              "https://instagram.com/p/atelier-ref-01",
              "https://instagram.com/p/atelier-ref-02",
            ].map((link, i) => (
              <Card
                key={link}
                sx={{ p: 2, mb: 1.2, boxShadow: "none", bgcolor: "#faf5f2" }}
              >
                <Stack direction="row" alignItems="center" gap={1.2}>
                  <Avatar sx={{ bgcolor: "#e8d4cf", color: palette.wine }}>
                    <Instagram />
                  </Avatar>
                  <Box flex={1} minWidth={0}>
                    <Typography variant="body2" fontWeight={700} noWrap>
                      {link}
                    </Typography>
                    <Button
                      size="small"
                      href={link}
                      target="_blank"
                      endIcon={<Launch />}
                      sx={{ px: 0 }}
                    >
                      Abrir referência
                    </Button>
                  </Box>
                </Stack>
                <TextField
                  fullWidth
                  size="small"
                  label="O que considerar dessa referência?"
                  placeholder={
                    i ?"Ex.: apenas as sardas" : "Ex.: formato da boca"
                  }
                  sx={{ mt: 1.5, bgcolor: "white" }}
                />
              </Card>
            ))}
          </DetailSection>
          <DetailSection title="Fotos da boneca">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 1,
              }}
            >
              {["Frente", "Lateral", "Cabelo/corpo"].map((x, i) => (
                <Box
                  key={x}
                  sx={{
                    aspectRatio: "1",
                    borderRadius: 3,
                    bgcolor: i === 0 ?"#eadbd4" : "#e8e2dd",
                    display: "grid",
                    placeItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <ImageOutlined sx={{ color: "#9f8d85" }} />
                    <Typography variant="caption" display="block">
                      {x}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </DetailSection>
          <DetailSection title="Observações da cliente">
            <Typography variant="body2" color="text.secondary">
              Quero que ela fique muito delicada e sonhadora. Gosto da boca da
              primeira referência e das sardinhas da segunda. Pode usar sua
              sensibilidade para escolher os tons.
            </Typography>
          </DetailSection>
        </Stack>
        <Stack spacing={2}>
          <Card
            sx={{
              p: 2.5,
              boxShadow: "none",
              position: { lg: "sticky" },
              top: { lg: 90 },
            }}
          >
            <Typography variant="h5" mb={2}>
              Montar orçamento
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Valor estimado"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">R$</InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Prazo estimado"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
              <TextField
                multiline
                rows={3}
                label="Observações do orçamento"
                value={budgetNotes}
                onChange={(e) => setBudgetNotes(e.target.value)}
              />
              <TextField
                multiline
                rows={4}
                label="Observações internas da artista"
                value={internal}
                onChange={(e) => setInternal(e.target.value)}
                helperText="A cliente não verá estas anotações."
              />
              <Divider />
              <Typography fontWeight={800}>Mensagem para WhatsApp</Typography>
              <TextField
                multiline
                minRows={12}
                value={editableMessage}
                onChange={(e) => setEditableMessage(e.target.value)}
              />
              <Button
                variant="contained"
                startIcon={copied ?<Check /> : <ContentCopy />}
                onClick={async () => {
                  await navigator.clipboard?.writeText(editableMessage);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }}
              >
                {copied ?"Mensagem copiada" : "Copiar mensagem"}
              </Button>
              <Button variant="outlined" startIcon={<WhatsApp />}>
                Abrir WhatsApp
              </Button>
            </Stack>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
}
